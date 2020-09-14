module.exports.ThemeDataCenter = class ThemeDataCenter{
    constructor(){
        this.configIndex = 'config';
        this.themeElements = ['header', 'footer'];
        this._constructor();
    }

    _constructor() {
        console.log(new Error('Abstract method not implemented'));
        return null;
    }

    getThemeData() {
        console.log(new Error('Abstract method not implemented'));
        return null;
    }
};