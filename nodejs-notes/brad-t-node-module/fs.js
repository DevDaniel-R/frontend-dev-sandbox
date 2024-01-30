// const fs = require( 'fs' );
const fs = require( 'fs/promises' )

//TODO Write to a file //

//! Call back version
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('File created')
// });

//! Promise Version
// fs.writeFile('file2.txt','Hello World 2').then(() => console.log('File Created')).catch((err) => console.log(err));

//! Sync Version
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File Created')

//! Async await
// async function createFile(filename, content) {
//     try {
//         await fs.writeFile(filename, content);
//         console.log('File Created')
//     } catch (error) {
//         console.log(error);
//     }
// }

// createFile('file4.txt', 'Hello World 4');

//TODO Read from a file 
// async function readFile(filename) {
//     try {
//         const data = await fs.readFile(filename, 'utf8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');

//TODO Delete a file
// async function deleteFile(filename){
//     try {
//         await fs.unlink(filename);
//         console.log(`File ${filename} deleted`)
//     } catch {
//         console.log(err);                                                       
//     } 
// }

// deleteFile('file3.txt');
// deleteFile('file2.txt');

//TODO Rename a File //
// async function renameFile(oldName, newName) {
//     try {
//         await fs.rename(oldName, newName);
//         console.log(`File ${oldName} rename to ${newName}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// renameFile('file1.txt','file.txt');

//TODO Create a folder //
// async function createFolder(folderName){
//     try {
//         await fs.mkdir(folderName);
//         console.log(`Folder ${folderName} created`)
//     } catch (error) {
//     console.log(error)
//     }
// }

// createFolder('newFolder');