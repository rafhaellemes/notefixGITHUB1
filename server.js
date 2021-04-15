//Install express server
const express = require('express');
// Requirement of path Module in order to manage URLS
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static('./dist/NOTEFIX'));
app.get('/*', function(req,res) {
   res.sendFile('index.html', {root: 'dist/NOTEFIX/'});
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);