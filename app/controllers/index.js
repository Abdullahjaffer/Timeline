var path = require('path');

module.exports = function (router) {
  // router.get('*', function (req, res) {
  //   res.sendFile("./index.html", { root: path.join(__dirname, './public') })
  //   })
  router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../', 'public/index.html'));
  });
};