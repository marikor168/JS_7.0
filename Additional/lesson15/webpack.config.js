'use strict';

let path = require('path');

module.exports = {
  // режим сборки при помощи webpack
  mode: 'development',
  // точка входа (откуда webpack будет начинать свою работу)
  entry: './src/js/script.js',
  output: {
    filename: 'bundle.js',
    // необязательный параметр, если его не указывать, то наша папка просто попадет в dist
    path: __dirname + '/dist/js'
  },
// если стоит true, то webpack будет отслеживать изменение наших файлов и в автоматическом режиме будет собирать проект каждый раз, как мы сохраняем какой-либо файл
  watch: true,
// source-map - карта исходников
  devtool: "source-map",
};
