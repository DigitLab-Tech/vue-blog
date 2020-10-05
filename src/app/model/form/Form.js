import Field from 'App/model/form/Field'
import Axios from "axios";
export default class Form{
    constructor(data){
        this.fields = [];
        this._init(data);
    }

    _init(data) {
        this.name = data.name;
        this.id = data.name;

        data.formFields.forEach(element => {
            this.fields.push(new Field(element));
        });
    }

    _serialize(){
        let data = '';
        this.fields.forEach(field => {
            data += '&' + field.getName() +'='+encodeURIComponent(field.value);
        });
        return data;
    }

    submit(){
        if(this._isValid()){
            Axios.post('/', this._serialize()).then(data => console.log(data));
        }
    }

    _isValid(){
        let hasError = false;

        this.fields.forEach(field => {
            field.validate();
           if(field.hasError() === true){
               hasError = true;
           }
        });

        return !hasError;
    }
}