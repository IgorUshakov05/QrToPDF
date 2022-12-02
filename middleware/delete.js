const fs = require("fs");
const colors = require('colors');

const deleted = () => {
  try {
    fs.readdir('./qrcode', (err, files) => {
      files.forEach(file => {

        fs.unlink(`./qrcode/${file}`, err => {
          if (err) console.log(err);
        });
      });
    })
    console.log('Файлы QR успешно удалёны'.bgGreen.bold);
  } catch (error) {
    console.log("Ошибка удаления".red.underline.bold)
  }
  
}

module.exports = deleted

