const fs = require('fs');
module.exports.FontFaceGenerator = class FontFaceGenerator{
    static save(fontData, fontPath, cssPath){
        let rules = '';

        fontData.files.forEach(file => {
            rules += this._getCssString(fontData.name, file, fontPath);
        });
        console.log(rules);
        fs.mkdir(cssPath, {recursive:true}, err => {
            if(err){
                console.log(`Error creating directory: ` + err)
            }
            else{
                fs.writeFile(cssPath + '/fonts.css',rules, err => {
                    if (err) throw err;
                });
            }
        });
    }

    static _getCssString(fontName, file, path){
        return '@font-face{font-family:\''+file.title+'\';src:url(\'../fonts/'+fontName+'/'+file.file.fileName+'\');}';
    }
};