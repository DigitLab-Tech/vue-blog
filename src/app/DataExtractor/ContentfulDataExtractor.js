export default class ContentfulDataExtractor{
    static recursiveCounter = 0;
    static itemIndex = 'items';
    static fieldIndex = 'fields';
    static indexToExtract = ['sys', 'fields'];

    static getNormalizedData(data){
        return data;
        /*console.log(data);
        console.log('Recursive Counter = ' + this.recursiveCounter);
        let normalizedData = [];

       if(Array.isArray(data)){
           console.log('Data is array');
           data.forEach(element => {
              normalizedData.push(this._getNormalizedData(element));
           });
       }
       else if(Object.prototype.hasOwnProperty.call(data, this.itemIndex)){
           console.log('Data is not array but have an items index');
           data[this.itemIndex].forEach(element => {
               normalizedData.push(this._getNormalizedData(element));
           });
       }
       else{
           normalizedData.push()
       }


       return normalizedData;*/
    }

    static _getNormalizedData(data){
        let normalizedData = {};

        console.log(data);

        if(Object.prototype.hasOwnProperty.call(data, this.fieldIndex)){
            Object.keys(data[this.fieldIndex]).forEach(key => {
                if(Array.isArray(data[this.fieldIndex][key])){
                    console.log('recursing on array');
                    data[this.fieldIndex][key] = this.getNormalizedData(data[this.fieldIndex][key]);
                }
                else if(typeof data[this.fieldIndex][key] === 'object'){
                    console.log('recursing on object');
                    data[this.fieldIndex][key] = this._getNormalizedData(data[this.fieldIndex][key]);
                }
                normalizedData[key] = data[this.fieldIndex][key];
            });
        }
        else{
            normalizedData = data;
        }

        return normalizedData;
    }
}