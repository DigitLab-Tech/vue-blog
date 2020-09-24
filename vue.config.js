var WebpackBeforeBuildPlugin = require('before-build-webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const ThemeSynchronizer = require('./ThemeSynchronizer/ThemeSychronizer').ThemeSynchronizer;

let path = require('path');

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                resolve: {alias: {
                    Public: path.resolve(__dirname, 'public'),
                    App: path.resolve(__dirname, 'src', 'app'),
                    Assets: path.resolve(__dirname, 'src', 'assets'),
                    }},
                plugins: [
                    new WebpackBeforeBuildPlugin((stats, callback) => {
                        ThemeSynchronizer.syncAll().then(() => {
                            callback();
                        });
                    }),
                    new PrerenderSpaPlugin(
                        // Absolute path to compiled SPA
                        path.resolve(__dirname, 'dist'),
                        // List of routes to prerender
                        ['/'],
                    )
                ]
            }
        } else {
            return{
                resolve: {alias: {
                        Public: path.resolve(__dirname, 'public'),
                        App: path.resolve(__dirname, 'src','app'),
                        Assets: path.resolve(__dirname, 'src', 'assets'),
                    }},
            };
        }
    }
};