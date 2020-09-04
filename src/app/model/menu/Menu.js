import AbstractModel from "App/model/AbstractModel";
import Link from 'App/model/menu/Link';
export default class Menu extends AbstractModel{
    _constructor() {
        this.links = [];
    }

    _init() {
        this.data.liens.forEach(element =>{
            this.links.push(new Link(element))
        });
    }
}