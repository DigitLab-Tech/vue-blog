const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const ThemeDataCenter = require("../ThemeDataCenter").ThemeDataCenter;

module.exports.Wordpress = class Wordpress extends ThemeDataCenter{
    _constructor() {
        this.client = new XMLHttpRequest();
        this.apiUrl = process.env.VUE_APP_WORDPRESS_API_URL;
    }

    getThemeData() {
        let data = {};
        this.themeElements.forEach(element => {
            this.client.open('GET',this.apiUrl + element, false);
            this.client.send(null);
            if(this.client.status === 200){
                data[element] = JSON.parse(this.client.responseText);
            }
        });
        return data;
    }
};