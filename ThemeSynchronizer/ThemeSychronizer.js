const Contentful = require('./ThemeDataCenter/Contentful').Contentful;
const Wordpress = require('./ThemeDataCenter/Wordpress').Wordpress;
const ThemeAssetExtractor = require('./ThemeAssetExtractor').ThemeAssetExtractor;
const ThemeAssetUploader = require('./ThemeAssetUploader').ThemeAssetUploader;
const ContentfulDataExtractor = require('./DataExtractor/ContentfulDataExtractor').ContentfulDataExtractor;
const fs = require('fs');

module.exports.ThemeSynchronizer = class ThemeSynchronizer{
    static syncAll(){
        let themeDataCenter = {};
        let DataExtractor = {};
        let themeAssetExtractor = new ThemeAssetExtractor();

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
            let normalizedData = DataExtractor.getNormalizedData(data);
            let assetUrls = themeAssetExtractor.getAssetUrls(normalizedData);
            assetUrls.forEach(element => {
                ThemeAssetUploader.save(element);
            });

            return fs.writeFile('public/themeData.json',JSON.stringify(normalizedData) ,function(){});
        });
    }
};