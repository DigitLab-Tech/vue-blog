import Field from 'App/model/form/Field'
import axios from "axios";
export default class Form{
    constructor(data){
        this.fields = [];
        this.id = data.name;
        this.name = data.name;
        this.msg = '';
        this.honeypot = this.name;

        data.formFields.forEach(element => {
            this.fields.push(new Field(element));
        });
    }

    _serialize(){
        let data = encodeURIComponent('form-name') + '=' + encodeURIComponent(this.honeypot);
        this.fields.forEach(field => {
            data += '&' + encodeURIComponent(field.getName()) +'='+encodeURIComponent(field.value);
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
            ).then(() => {
                this._reset();
                this.msg = 'Merci de votre intéret, je vous contacterai bientot.';
            }).catch(() => {
                this._reset();
                this.msg = 'Une erreur s\'est produite. Veuillez réesseyer plus tard.';
            });
        }
    }

    _reset(){
        this.fields.forEach(element => {
           element.value = '';
        });
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