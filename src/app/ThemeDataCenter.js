import themeData from '../configs.json';
export default class ThemeDataCenter{

    static get(config){
        return themeData[config];
    }
}