const fs = require('fs');
  
module.exports.logMiddleware  = (req, res, next) => {
    var dateTime = new Date().toString();
    var log = `Exchange Server: ${dateTime}: ${req.method} ${req.url} `;
    console.log(log);
    fs.appendFile('exhchangeServer.log', log + '\n');
    next();
};



