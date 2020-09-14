module.exports.ThemeAssetExtractor = class ThemeAssetExtractor{
    getAssetUrls(data){
        try{
            data = JSON.stringify(data)
        }
        catch (e) {
            return
        }

        return this._addMissingHttp(this._removeDouble(data.match(/(?=(https?|\/\/))([^"]*\.(png|jpe?g|ico|gif|ttf))/gi)));
    }

    _removeDouble(urls){
        if(Array.isArray(urls)){
            return urls.filter((v, i, a) => a.indexOf(v) === i);
        }
        return null;
    }

    _addMissingHttp(urls){
        if(Array.isArray(urls)){
            return urls.map(element => {
                if(element.charAt(0) !== 'h'){
                    return  'http:' + element;
                }
            });
        }
        return [];
    }
};