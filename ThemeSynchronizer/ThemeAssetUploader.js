const http = require('http');
const fs = require('fs');

module.exports.ThemeAssetUploader = class ThemeAssetUploader{
    static syncImage(data){
        let imageUrls = data.match(/https?([^"]*.(png|jpe?g|ico|gif|ttf))/gi);
        imageUrls.forEach(element => {
            let imageName = element.substring(element.lastIndexOf('/') + 1);
            http.get(element, res => {
                let imageData = '';
                res.setEncoding('binary');

                res.on('data', chunk => {
                    imageData += chunk
                });

                res.on('end', () => {
                    fs.mkdir('public/themeAsset', {recursive:true}, err => {
                        if(err){
                            console.log(`Error creating directory: ` + err)
                        }
                        else{
                            fs.writeFile('public/themeAsset/'+imageName, imageData, 'binary', err => {
                                if (err) throw err;
                            });
                        }
                    });
                });
            });
        });
    }
};