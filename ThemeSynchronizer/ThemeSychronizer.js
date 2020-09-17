const Contentful = require('./ThemeDataCenter/Contentful').Contentful;
const Wordpress = require('./ThemeDataCenter/Wordpress').Wordpress;
const ThemeAssetExtractor = require('./ThemeAssetExtractor').ThemeAssetExtractor;
const ThemeAssetUploader = require('./ThemeAssetUploader').ThemeAssetUploader;
const FontFaceGenerator = require('./FontFaceGenerator').FontFaceGenerator;
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
            FontFaceGenerator.save(normalizedData.mainFont, 'src/assets/fonts', 'src/assets/css');
            let assetUrls = themeAssetExtractor.getAssetUrls(normalizedData);
            ThemeAssetUploader.save(assetUrls, 'src/assets');

            return fs.mkdir('src/assets', {recursive:true}, err => {
                if(err){
                    console.log(`Error creating directory: ` + err);
                }
                else{
                    fs.writeFile('src/initialData.json',JSON.stringify(normalizedData) ,function(){});
                }
            });
        });
    }
};