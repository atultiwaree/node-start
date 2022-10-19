// const impi = require("./Impo");
// const hello = impi.yellow("Atul");
// const orange = impi.orange("Black");
// console.log(hello, orange);

const path = require("path");

//Current folder name

console.log(`Folder name ${path.dirname(__filename)}`);

//Current File name

console.log(`File Name ${path.basename(__filename)}`);

//Extension of File

console.log(`File extension ${path.extname(__filename)}`);

//Whole Detail

console.log(`Full Details ${path.parse(__filename)}`);

//Join function

console.log(`Join ${path.join(__dirname, "pdir", "cdir")}`);

/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │                     File System                                                                                               │
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const fs = require("fs");

//Making folder

fs.mkdir(path.join(__dirname, "/test1"), (error) => {
  if (error) console.log("Error...");
  else console.log("Created...");
});
//-->Note : File folder is already exist it won't make...error shown in error variable

fs.writeFile(
  path.join(__dirname, "test1", "test.js"),
  "Yo Yo Node...",
  (error) => {
    if (error) {
      console.log("There was some error");
      throw error;
    } else {
      console.log("File Created successfully Yo!....");
    }
  }
);

//-->>Note : writeFile('path', 'Some content inside', callback)

//Reading files

fs.readFile(path.join(__dirname, "test1", "test.js"), (error, data) => {
  if (error) {
    console.log("Reading file error");
  } else {
    console.log(data); //It gives buffer data

    //To read content in readable format we need to use Buffer.from(MAchine content).toString();
    const content = Buffer.from(data).toString();
    console.log(content);
  }
});

//-->>Note : readFile is async operation while readFileSync is Synchronous Operation

/* 
  ┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │                             Operating System Module                                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
