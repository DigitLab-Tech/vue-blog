module.exports.ThemeAssetExtractor = class ThemeAssetExtractor{
    getAssetUrls(sdata){
        return this._addMissingHttp(this._removeDouble(sdata.match(/(?=(https?|\/\/))([^"]*\.(png|jpe?g|ico|gif|ttf))/gi)));
    }

    _removeDouble(urls){
        return urls.filter((v, i, a) => a.indexOf(v) === i);
    }

    _addMissingHttp(urls){
        return urls.map(element => {
            if(element.charAt(0) !== 'h'){
                return  'https' + element;
            }
        })
    }
};