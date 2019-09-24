// 由於wevpack是基於Node進行構件的，所有，webpack的配置文件中，任何合法的Node代碼是支持的
const path = require('path');
// 在內存中，根據指定的模板頁面，生成一份內存中的首頁，同時自動把打包好的bundle注入到頁面底部
// 如果要配置插建，需要在導出的對象中，掛載一個plugin節點
const htmlWebpackPlugin = require("html-webpack-plugin")

const VueLoaderPlugin = require('vue-loader/lib/plugin')


//當以命令航行試運行 webpack 或webpack-dev-server的時候，工具會發現，我們並沒有提供要打包的文件入口和出口文件，此時，他會檢查項目根目錄中的配置文件，並讀取這個文件，就拿到了導出的這格配置對象，然後根據這個對象，進行打包構建

module.exports = {
    entry: path.join(__dirname,"./src/main.js"), //入口文件
    output:{
        path: path.join(__dirname,"./dist"), //輸出路徑
        filename:"bundle.js" //指定輸出的文件
    },
    plugins:[ //所有webpack 插建的配置節點
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),  //指定模板文件路徑
            filename:"index.html", //設置生成的內存頁面的名稱
            
        }),
        new VueLoaderPlugin()
    ],
    module:{  //配置所有第三方loader 模塊的
        rules:[
            { test:/\.css$/, use:["style-loader", "css-loader"] }, //處理css文件的loader
            { test:/\.less$/, use:["style-loader","css-loader","less-loader"]}, //處理less文件的loader
            { test:/\.(jpg|png|gif|bmp|jpeg)$/, use :"url-loader?limit=7631&name=[name].[ext]"}, //處理圖片路徑的loader
            // limit 給定的值。是圖片的大小，但衛視byte，如果我們引用的圖片，大於或等於給定的limit直，則不會轉為base64的字符串，如果圖片小於給定的直，則會被轉譯為base64字符串
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},
            { test:/\.js$/, use :["babel-loader"], exclude:/node_modules/}, // 這是配置babel來轉化高級語法
            { test: /\.vue$/, use: ['vue-loader']}, // 處理vue的過程
        ]
    },
    resolve: {
        alias: {
            //修改Vue倍导入时包的路径
            "vue$" : "vue/dist/vue.js"
        }
    }
}

