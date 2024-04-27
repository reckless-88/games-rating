const http = require('http');
const path = require('path');
const { mainRouteController, defaultRouteController, gameRouteController, voteRouteController } = require('./controllers')
//const { staticFile, mimeTypes } = require('./appModules')

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");            
            break;
        case "/game":
            gameRouteController(res);
            break;
        case "/vote":
            voteRouteController(req, res);
            break;
        default:
            defaultRouteController(res, url);
    };
});

server.listen(3005);






// const mimeTypes = require('./appModules/http-utils/mime-types');
// const mainRouteController = require('./controllers/main');
// const defaultRouteController = require('./controllers/default');
// const gameRouteController = require('./controllers/game');
// const voteRouteController = require('./controllers/vote');
// const staticFile = require('./appModules/http-utils/static-file')
