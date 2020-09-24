const Contentful = require('./ThemeDataCenter/Contentful').Contentful;
const Wordpress = require('./ThemeDataCenter/Wordpress').Wordpress;
const ThemeAssetExtractor = require('./ThemeAssetExtractor').ThemeAssetExtractor;
const ThemeAssetUploader = require('./ThemeAssetUploader').ThemeAssetUploader;
const ThemeCssGenerator = require('./ThemeCssGenerator').ThemeCssGenerator;
const ContentfulDataExtractor = require('./DataExtractor/ContentfulDataExtractor').ContentfulDataExtractor;
const fs = require('fs');

module.exports.ThemeSynchronizer = class ThemeSynchronizer{
    static cssIndex = ['bgColor', 'mainColor', 'secondaryColor'];
    static fontIndex = ['mainFont'];
    static assetPath = 'src/assets';
    static configJsonPath = 'src';

    static syncAll(){
        let themeDataCenter = {};
        let DataExtractor = {};

        switch(process.env.VUE_APP_DATA_CENTER){
            case 'contentful':
                themeDataCenter = new Contentful();
                DataExtractor = ContentfulDataExtractor;
                break;
            case 'wordpress':
                themeDataCenter = new Wordpress();
                DataExtractor = ContentfulDataExtractor;
                break;
        }

        return themeDataCenter.getThemeConfig().then(data => {
            let configs = DataExtractor.getNormalizedData(data);
            this._syncConfigs(configs);
            this._syncAssets(configs);
        });
    }

    static _syncAssets(configs){
        let themeCssGenerator = new ThemeCssGenerator();
        this.cssIndex.forEach(element =>{
            if(Object.prototype.hasOwnProperty.call(configs, element)){
                themeCssGenerator.addVariable(element, configs[element]);
            }
        });
        this.fontIndex.forEach(element =>{
            if(Object.prototype.hasOwnProperty.call(configs, element)){
                themeCssGenerator.addFont(configs[element], element);
            }
        });

        themeCssGenerator.save('theme.css', this.assetPath);
        ThemeAssetUploader.save(ThemeAssetExtractor.getAssetUrls(configs), this.assetPath);
    }

    static _syncConfigs(configs){
        fs.mkdir(this.configJsonPath, {recursive:true}, err => {
            if(err){
                console.log(`Error creating directory: ` + err);
            }
            else{
                fs.writeFile(this.configJsonPath + '/' + 'configs.json',JSON.stringify(configs) ,function(){});
            }
        });
    }
};