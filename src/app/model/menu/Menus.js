import AbstractModel from "App/model/AbstractModel";
import Menu from './Menu';
export default class Menus extends AbstractModel{
    _constructor(){
        this.menus = [];
    }

    _init(){
        this.data.forEach(element =>{
           this.menus.push(new Menu(element))
        });
    }
}