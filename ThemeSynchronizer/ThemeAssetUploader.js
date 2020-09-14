const http = require('http');
const fs = require('fs');

module.exports.ThemeAssetUploader = class ThemeAssetUploader{
    static save(url){
        let fileName = url.substring(url.lastIndexOf('/') + 1);
        http.get(url, res => {
            let fileData = '';
            res.setEncoding('binary');
            res.on('data', chunk => {
                fileData += chunk
            });
            res.on('end', () => {
                fs.mkdir('public/themeAsset', {recursive:true}, err => {
                    if(err){
                        console.log(`Error creating directory: ` + err)
                    }
                    else{
                        fs.writeFile('public/themeAsset/'+fileName, fileData, 'binary', err => {
                            if (err) throw err;
                        });
                    }
                });
            });
        });
    }
};