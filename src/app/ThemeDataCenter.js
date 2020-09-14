import themeData from 'Public/themeData.json';
import ContentfulDataExtractor from "App/DataExtractor/ContentfulDataExtractor";

export default class ThemeDataCenter{
    static _getDataExtractor(){
        switch (process.env.VUE_APP_DATA_CENTER) {
            case 'contentful':
                return ContentfulDataExtractor;
            case 'wordpress':
                return null;
            default:
                return null;
        }
    }

    static get(section){
        return this._getDataExtractor().getNormalizedData(themeData[section]);
    }

    static getConfig(){
        let sectionKey = 'config';
        return this._getDataExtractor().getNormalizedData(themeData[sectionKey])[0];
    }
}