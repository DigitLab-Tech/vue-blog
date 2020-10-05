import Validator from "./Validator";
export default class Field{
    constructor(data){
        this._init(data);
        console.log(this);
    }

    _init(data){
        Object.keys(data).forEach(element => {
           this[element] = data[element];
        });

        this.value = '';
        this.errors = [];
    }

    getName(){
        return this.name.toLowerCase();
    }

    getRdnName(){
        return this.name.length + '-' + this.getName();
    }

    getError(){
        if(this.hasError()){
            return this.errors[0];
        }
        return '';
    }

    getPlaceHolder(){
        if(this.required){
            return this.label + '*';
        }
        return this.label;

    }


    validate(){
        this.errors = [];

        if(this.required && !Validator.required(this.value)){
            this.errors.push('Ce champs est requis');
        }
        else if(typeof this.validation !== 'undefined'){
            if(this.validation.toLowerCase() === 'email' && !Validator.email(this.value)){
                this.errors.push('Veuillez entrer un courriel valide');
            }
        }
    }


    hasError(){
        return this.errors.length > 0;
    }
}