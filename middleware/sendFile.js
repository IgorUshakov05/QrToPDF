const color = require('colors');
const sendFile = (req, res) => {
  res.download("./pdf/Document.pdf", "Your QRCodes.pdf", (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Файл отправлен".bgGreen)
    }
  })
}

module.exports = sendFile