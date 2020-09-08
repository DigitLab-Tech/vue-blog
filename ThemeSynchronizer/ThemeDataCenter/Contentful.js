const ThemeDataCenter = require('../ThemeDataCenter').ThemeDataCenter;
const contentful = require('contentful');

module.exports.Contentful = class Contentful extends ThemeDataCenter{
    _constructor(){
        this.client = contentful.createClient({
            space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
            accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN
        });
    }

    getThemeData() {
        let data = {};
        return this.asyncForEach(this.themeElements, async (element) => {
            data[element] = await this.client.getEntries({'content_type': element}).then(entries => {return entries}).catch(e => {console.log(e)});
        }).then(() => {return data});
    }

    async asyncForEach(array, callback){
        for(let index = 0; index < array.length; index++){
            await callback(array[index], index, array);
        }
    }
};