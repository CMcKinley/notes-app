const express = require('express');

class StaticRoutes {
   init(app) {
     // static files
    app.use(express.static('client/public/build'));
   }
}

module.exports = StaticRoutes;