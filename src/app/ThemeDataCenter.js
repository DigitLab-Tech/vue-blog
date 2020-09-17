import themeData from '../initialData.json';
export default class ThemeDataCenter{

    static get(config){
        return themeData[config];
    }
}