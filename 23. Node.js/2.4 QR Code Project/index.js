import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
 
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
