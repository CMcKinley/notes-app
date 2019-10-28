const express = require('express');
const path = require('path');

class StaticRoutes {
   init(app) {
     // static files
     app.use('/', express.static(path.join(__dirname, '../../', 'client/build')));
   }
}

module.exports = StaticRoutes;