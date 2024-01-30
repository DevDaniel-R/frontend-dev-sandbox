//? path module. And what I've done is I deleted the text files and the folder we created in the last video, and I just created this path dot JS file to work in. Now the PATH module is a core module that allows us to work with file and directory paths, and it can be used to get the base name of a file, get the extension of a file, create absolute paths and much

const path = require ('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

//basename()

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');

console.log(base2);

//extname

const ext = path.extname(myFilePath);
console.log(ext);

//dirname()

const dir = path.dirname(myFilePath);
console.log(dir);

// join()
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
console.log('myPath');

//resolve()
const myPath2 = path.resolve('subfolder','anotherfolder','index.js');
console.log(myPath2);

// __dirname
console.log(__dirname);


//__filename
console.log(__filename);