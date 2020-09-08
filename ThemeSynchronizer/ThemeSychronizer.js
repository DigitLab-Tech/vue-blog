const Contentful = require('./ThemeDataCenter/Contentful').Contentful;
const Wordpress = require('./ThemeDataCenter/Wordpress').Wordpress;
const ThemeAssetExtractor = require('./ThemeAssetExtractor').ThemeAssetExtractor;
const fs = require('fs');

module.exports.ThemeSynchronizer = class ThemeSynchronizer{
    static syncAll(){
        let themeDataCenter = {};
        let themeAssetExtractor = new ThemeAssetExtractor();

        switch(process.env.VUE_APP_DATA_CENTER){
            case 'contentful':
                themeDataCenter = new Contentful();
                break;
            case 'wordpress':
                themeDataCenter = new Wordpress();
                break;
        }
        return themeDataCenter.getThemeData().then(data => {
            let sdata = JSON.stringify(data);
            console.log(themeAssetExtractor.getAssetUrls(sdata));
            return fs.writeFile('public/themeData.json',JSON.stringify(data) ,function(){});
        });
    }
};