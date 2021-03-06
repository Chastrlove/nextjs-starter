const withAntdLess = require('./antd-next-less');

module.exports = withAntdLess({
    // optional
    modifyVars: { '@primary-color': '#04f' },
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},

    // Other Config Here...

    webpack(config) {
        return config;
    },

    /*future: {
        // if you use webpack5
        webpack5: true,
    },*/
});
