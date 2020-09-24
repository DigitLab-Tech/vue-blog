const http = require('http');
const fs = require('fs');

module.exports.ThemeAssetUploader = class ThemeAssetUploader{
    static fontExtensions = ['ttf'];

    static save(urls, path){
        if(Array.isArray(urls)){
            urls.forEach(url => {
               this._save(url, path);
            });
        }
        else{
            this._save(urls, path);
        }
    }

    static _save(url, path){
        let fileName = url.substring(url.lastIndexOf('/') + 1);
        http.get(url, res => {
            let fileData = '';
            res.setEncoding('binary');
            res.on('data', chunk => {
                fileData += chunk
            });
            res.on('end', () => {
                let splitName = fileName.split('.');
                if(Array.isArray(splitName) && splitName.length === 2){
                    if(this.fontExtensions.includes(splitName[1])){
                        let fontName = splitName[0].split('-')[0];
                        path += '/fonts/' + fontName + '/';
                    }
                    else{
                        path = 'public/';
                    }
                }
                this._writeFile(path, fileName, fileData);
            });
        });
    }

    static _writeFile(path, fileName, fileData){
        fs.mkdir(path, {recursive:true}, err => {
            if(err){
                console.log(`Error creating directory: ` + err)
            }
            else{
                fs.writeFile(path + fileName, fileData, 'binary', err => {
                    if (err) throw err;
                });
            }
        });
    }
};