module.exports.ContentfulDataExtractor = class ContentfulDataExtractor{
    static indexToRemove = ['total','skip', 'limit', 'space', 'environment', 'revision', 'locale', 'sections', 'marks', 'data', 'includes'];
    static indexToRegress = ['sys', 'fields'];
    static itemIndex = 'items';

    static getNormalizedData(data){
        if(Object.prototype.hasOwnProperty.call(data, this.itemIndex)){
            return this._getNormalizedData(data[this.itemIndex][0]);
        }
        return this._getNormalizedData(data);
    }

    static _getNormalizedData(data){
        if(Array.isArray(data)){
            return this._getNormalizedDataArray(data);
        }
        if(typeof data === 'object'){
            return this._getNormalizedDataObject(data);
        }

        return data;
    }

    static _getNormalizedDataArray(data){
        let cleanData = [];
        data.forEach(element => {
           cleanData.push(this._getNormalizedData(element));
        });
        return cleanData;
    }

    static _getNormalizedDataObject(data){
        let cleanData = {};
        Object.keys(data).forEach(key =>{
            if(!this.indexToRemove.includes(key)){
                if(this.indexToRegress.includes(key)){
                    cleanData = this._getNormalizedData(data[key]);
                }
                else{
                    cleanData[key] = this._getNormalizedData(data[key]);
                }
            }
        });
        return cleanData
    }
};