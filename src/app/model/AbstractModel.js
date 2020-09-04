export default class AbstractModel{
   constructor(data){
        this.data = data;
        this._constructor();
        this._init();
    }

    _constructor(){
        throw new Error('Abstract method not implemented');
    }

    _init(){
        throw new Error('Abstract method not implemented');
    }
}