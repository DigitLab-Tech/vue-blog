const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = require('http');
const fs = require('fs');
const themeElements = ['config', 'header', 'footer'];

module.exports.ThemeConfiguration = class DataCenter{
    static syncAll(){
        let data = {};
        themeElements.forEach(element => {
            let requestData =  this._getData(element);
            if(requestData !== null){
                data[element] = this._getData(element);
            }
        });
        let sdata = JSON.stringify(data);

        if(Object.keys(data).length > 0){
            this.syncImage(sdata);
        }
        this.toFile(sdata);
    }

    static _getData(type){
        let request = new XMLHttpRequest();
        let apiUrl = process.env.ROOT_API;
        request.open('GET',apiUrl + type, false);
        request.send(null);
        return request.status === 200 ? JSON.parse(request.responseText) : null;
    }

    static toFile(data){
        fs.writeFile('public/themeData.json', data, function(){});
    }

    static syncImage(data){
        let imageUrls = data.match(/https?([^"]*.(png|jpe?g|ico|gif))/gi);
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