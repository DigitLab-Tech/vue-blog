const fs = require('fs');
module.exports.ThemeCssGenerator = class ThemeCssGenerator{
    constructor(){
        this.variables = [];
        this.fonts = [];
        this.variableCssStrings = [];
        this.fontCssStrings = [];
    }

    addVariable(name, value){
        this.variables.push({name: this._mutateVariableName(name), value: value});
    }

    addFont(fontData, cssVarName = null){
        if(typeof cssVarName !== 'string'){
            cssVarName = fontData.name;
        }
        this.fonts.push(fontData);
        this.variables.push({name: this._mutateVariableName(cssVarName), value: fontData.name});
    }

    save(filename, path){
        this.fonts.forEach(font => {
           this.fontCssStrings.push(this._getFontString(font));
        });

        this.variables.forEach(variable => {
            this.variableCssStrings.push(this._getVarString(variable.name, variable.value));
        });

        fs.mkdir(path + '/css', {recursive:true}, err => {
            if(err){console.log(`Error creating directory: ` + err)}
            else{
                fs.writeFile(path + '/css/' + filename, this._getCssString(), err => {
                    if (err) throw err;
                });
            }
        });
    }

    _getCssString(){
        let str = '#app{';
        this.variableCssStrings.forEach(element => {
           str += element;
        });
        str += '}';

        this.fontCssStrings.forEach(element => {
           str += element;
        });
        return str;
    }

    _getVarString(name, value){
        return name + ':'+value+';';
    }

    _getFontString(font){
        let str = '';
        font.fontStyles.forEach(element => {
            str += '@font-face{font-family:\''+font.name+'\';src:url(\'../fonts/'+this._getSimplifyFontName(font.name)+'/'+element.file.file.fileName+'\');font-style:'+element.style+';font-weight:'+element.weight+';}';
        });
        return str;
    }

    _mutateVariableName(name){
        let cname = name.split('');
        cname.forEach((c, i) => {
            if(c == c.toUpperCase()){
                cname[i] = c.toLowerCase();
                cname.splice(i, 0,'-');
            }
        });
        return '--' + cname.join('');
    }

    _getSimplifyFontName(fontName){
        return fontName.split('-')[0];
    }
};