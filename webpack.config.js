import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === "production";
const envPath = path.resolve(__dirname, isProd ? ".env.production.local" : ".env.development");
let fileEnv = {};
if (fs.existsSync(envPath)) {
    const dotenvResult = dotenv.config({ path: envPath });
    fileEnv = dotenvResult.parsed || {};
}
const allEnv = { ...fileEnv, ...process.env };
const envKeys = Object.keys(allEnv)
    .filter((key) => key.startsWith("PUBLIC_"))
    .reduce((acc, key) => {
        acc[`process.env.${key}`] = JSON.stringify(allEnv[key]);
        return acc;
    }, {});

export default {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        clean: true,
        publicPath: "/",
    },
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@shared": path.resolve(__dirname, "src/shared"),
            "@features": path.resolve(__dirname, "src/features"),
            "@config": path.resolve(__dirname, "src/config"),
        },
        fallback: {
            crypto: false,
            path: false,
            fs: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "ts",
                    target: "es2020",
                },
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx",
                    target: "es2020",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin(envKeys),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public"),
                    to: path.resolve(__dirname, "dist"),
                    globOptions: {
                        ignore: ["**/index.html"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
