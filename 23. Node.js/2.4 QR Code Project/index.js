import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
 
// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([
    {
      message: "Indica la URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('myQrCode.png'));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("Archivo guardado!");
    });
  })
  .catch((error) => {
    console.error("Error: ", error)
  });
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.




// 3. Create a txt file to save the user input using the native fs node module.
