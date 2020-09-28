export default class Section{
    constructor(data){
        this.data = data;
        this.id = this.data.name.toLowerCase().replace(' ', '');
        console.log(data);
    }

    getId(){
        return this.id;
    }

    getTitle(){
        return this.data.title;
    }

    getImageData(name){
        return this.data.images.find((element) => {
            return element.title.toLowerCase() === name;
        }).file;
    }

    getTextContent(name){
        return this.data.textContents.find((element) => {
            return element.name.toLowerCase() === name;
        }).content.content[0].content[0].value
    }

    getCta(name){
        return this.data.ctas.find((element) => {
            return element.name.toLowerCase() === name;
        });
    }

    getContent(name){
        return this.data.contents.find(element => {
            return element.name.toLowerCase() === name;
        });
    }

    getContents(){
        return this.data.contents;
    }
}