import Field from 'App/model/form/Field'
import axios from "axios";
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
        let data = encodeURIComponent('form-name') + '=' + encodeURIComponent(this.name);
        this.fields.forEach(field => {
            data += '&' + encodeURIComponent(field.getRdnName()) +'='+encodeURIComponent(field.value);
        });
        return data;
    }

    submit(){
        if(this._isValid()){
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            };
            axios.post(
                "/",
                this._serialize(),
                axiosConfig
            ).then(data =>{
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
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