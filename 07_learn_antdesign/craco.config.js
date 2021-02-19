/**
 * craco.config.js$ - craco配置文件
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/2/19 3:23 下午
 * @LastEditTime: 2021/2/19 3:23 下午
 */

// 自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能
const CracoLessPlugin = require('craco-less');
// const path = require('path');
// const resolve = dir => path.resolve(__dirname, dir);

const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    // 修改配置文件
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack: {
        alias: {
            '@': resolve("src"),
            'components': resolve("src/pages"),
        }
    },

}