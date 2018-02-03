
const dbl = require('./dbl/dbOperation');
const productCrtl = require('./route/productController');
const middlewares = require('./middlewares/allMWare');
let path = require('path');

const express = require('express');

class App {

    static async run() {
        try {
            let app = express();
            app.use(express.static(path.join(__dirname, 'public')));
            app.use(express.static('images'));
            await dbl.dbConnect();
            await middlewares.init(app);
            await productCrtl.init(app);
            app.use((err, req, res,next) => {
                // res.send('Something broke!');
                console.log('hi');
                if(err.status !== 404) {
                 return next();
               }
             });
            return app.listen(8080);

        } catch (error) {
            throw error;
        }
    }
}

App.run().then((data) => {
    console.log('server started on : 8080');

}).catch((error) => {
    console.log(`Error!  ${error}`);
    process.exit(1);
});