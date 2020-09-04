import themeData from 'Public/themeData.json';

export default class ThemeDataCenter{
    static get(section){
        return themeData[section];
    }

    static getConfig(){
        let configs = themeData['config'];
        let config = {};
        for(let element of configs){
            console.log(element);
            if(element.slug === 'configuration-principal'){
                config = element;
                break;
            }
        }
        return config;
    }
}