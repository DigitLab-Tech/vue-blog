const PrerenderSpaPlugin = require('prerender-spa-plugin');
const ThemeSynchronizer = require('./ThemeSychronizer').ThemeConfiguration;

let path = require('path');
ThemeSynchronizer.syncAll();

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                resolve: {alias: {
                    Public: path.resolve(__dirname, 'public'),
                    App: path.resolve(__dirname, 'src', 'app')
                    }},
                plugins: [
                    new PrerenderSpaPlugin(
                        // Absolute path to compiled SPA
                        path.resolve(__dirname, 'dist'),
                        // List of routes to prerender
                        ['/'],
                    ),
                ]
            }
        } else {
            return{
                resolve: {alias: {
                        Public: path.resolve(__dirname, 'public'),
                        App: path.resolve(__dirname, 'src','app')
                    }},
            };
        }
    }
};