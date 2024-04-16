const fs = require("node:fs");

fs.writeFile("message.txt", "Hello Luigi, from NodeJS! =D", (err) =>{
    if (err) throw err;
    console.log("The file has been saved!");
});

fs.readFile("message.txt", "ascii", (err, data) => {
    if (err) throw err;
    console.log(data);
});