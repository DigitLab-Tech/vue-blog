export default class AbstractModel{
   constructor(data){
        this.data = data;
       /* this._constructor();
        this._init();*/
    }

    get(key){
        if(Object.prototype.hasOwnProperty.call(this.data, key)){
            return this.data[key];
        }
        return Object.prototype.hasOwnProperty.call(this.data, key) ? this.data[key] : null;
    }

    /*_constructor(){
        console.log(new Error('Abstract method not implemented'));
    }

    _init(){
        console.log(new Error('Abstract method not implemented'));
    }*/
}