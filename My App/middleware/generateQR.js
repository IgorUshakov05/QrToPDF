const QRcode = require('qrcode');

const generateQR = async (element) => {
  console.log("Генерация QRCode".bgGreen.bold)

  try {
    QRcode.toFile(`./qrcode/${element}.png`, element)
   
  }
  catch {
    console.log(`QR:${element} - не создан`.red.underline.bold)
  }
}

module.exports = generateQR