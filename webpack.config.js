'use strict';

const path = require('path');

// Extraer el CSS en un archivo aparte
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Generar el HTML (dist)
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Variables de entorno
const Dotenv = require('dotenv-webpack');


module.exports = {
    // Punto de entrada
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Archivo compilado de de JS
        filename: 'bundle.js',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css|.sass/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        // Variables
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/variables.sass'
                        }
                    }
                ]
            },
            {
                test: /\.png|.svg|.webp|.jpg$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.pug'),
            filename: 'index.html',
            inject: true,
            minify: true,
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            // dist
            filename: 'assets/estilos-[name].css'
        }),
        new Dotenv({
            // ruta del archivo .env
            path: './.env',
            // configuración
            systemvars: true
        })        
    ]
};
