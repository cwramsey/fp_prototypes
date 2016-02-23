'use strict';

const fs = require('fs');
const files = fs.readdirSync('./src');
files.map(x => x.replace('.js', ''))
     .forEach(x => {
         Array.prototype[x] = Array.prototype[x] || require(`./src/${x}`);
     });