const fs = require('fs');
const pdfBib = require('pdfkit');
const delite = require('./delete.js');

const ctrated = () => {

  var myArray = fs.readdirSync('./qrcode/', (err, file) => {
    file.forEach()
  })
  console.log("Создание PDF".bgGreen.bold)
  const doc = new pdfBib({ font: 'Courier' });
  doc.pipe(fs.createWriteStream('./pdf/Document.pdf'));
  doc.fillColor('red')
  doc.text("Doesn't work with Russian characters")
  doc.fillColor('blue')
  doc.text('Hi, this project is for technical interviews and GitHub only.', 100, 100, {
    link: 'https://github.com/IgorUshakov05',
    continued: true
  })
    .underline(100, 65, 430, 50, { color: 'blue' });

  doc.fillColor('black')
  doc.text('by Ushakov Igor', 100, 150, {
    align: 'right',
    link: null
  })
  doc.text('for Magneex', 100, 180, {
    align: 'right',
    link: null
  });
  doc.image('./pictures/Logo.png', 180, 300, {
    fit: [250, 250], align: 'center', valign:
      'center'
  })
  for (let i = 0; i < myArray.length; i++) {
    try {
      doc.addPage()
      doc.image('./qrcode/' + myArray[i], 0, 100, { width: 600 })
      console.log(`${myArray[i]} - запушен`.bgGreen.bold);
      doc.text((myArray[i].slice(undefined, -4)), {
        align: 'right',
      })
    } catch (error) {
      delite()
    }

  }
  doc.end();
}


module.exports = ctrated