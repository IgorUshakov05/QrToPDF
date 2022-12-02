const generateQR = require("./generateQR.js");
const ctrated = require('./generatePDF.js');
const deleted = require("./delete.js");

const post_text = (req, res, next) => {
  console.log('Поехали!'.bgBlue.bold)
  const prom = new Promise((res, rej) => {
    let collection = req.body.content.split(".");
    
    collection = collection.filter(Boolean);

    res(collection);
    rej("Неуспешно");
  })
  prom.then((obj) => {
    obj.forEach((element) => {
      generateQR(element);
    });
    return (obj)

  })

  prom.then((obj) => {
    setTimeout(() => {
      ctrated()
    }, 600);
    })
  prom.then(() => {
    setTimeout(() => {
      deleted()
    }, 4500);
  })
  prom.catch(() => {
    console.log("Error".red.underline.bold);
    res.sendStatus(500)
  })
};

module.exports = post_text;
