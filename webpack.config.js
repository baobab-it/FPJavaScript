// $ yarn add webpack-bundle-analyzer --dev
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
        typescript: "./src/index-ts.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    // Замість BundleAnalyzerPlugin використовуємо наступний optimization і в package.json "sideEffects": false
    optimization: {
        usedExports: true
    },
    plugins: [
        /*new BundleAnalyzerPlugin()*/
    ],
    //,mode: "development" use $ webpack -d or $ webpack -p
    mode: "production",
    // TS plugin налаштування
    resolve: {
        // Додамо `.ts` і `.tsx` для вирішення розширення
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // Всі файли з `.ts` чи `.tsx` розширення буде обробляти плагінок `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};
