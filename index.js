'use strict';

const fs = require('fs');

const files = fs.readdirSync('./src');
files.map(x => x.replace('.js', ''))
     .forEach(x => {
         if (Array.prototype[x]) {
             throw new Error(`Array prototype ${x} already exists.`);
         }

         Array.prototype[x] = require(`./src/${x}`);
     });