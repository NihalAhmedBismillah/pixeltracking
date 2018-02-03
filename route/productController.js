/**
 * Import npm modules
 */

const product = require('../model/product');

class ClsProductController {

    static init(app) {

        return new Promise((resolve, reject) => {

            app.get('/product/list', (req, res) => {

                product.getProudctList((error, products) => {
                    res.render('main/productlist', { products });
                });
            });

            app.get('/product/image', (req, res) => {

                product.getProudctList((error, products) => {
                    res.render('main/productlist', { products });
                });
            });
            app.get('/:id', (req, res) => {
                try {
                    let data = new Buffer(req.query.log, 'base64').toString('ascii');
                    let param = req.params.id;
                    console.log(data, param);
                    var buf = new Buffer([
                        0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00,
                        0x80, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x2c,
                        0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02,
                        0x02, 0x44, 0x01, 0x00, 0x3b
                    ]);
                    res.set('Content-Type', 'image/png');
                    res.end(buf, 'binary');
                } catch (error) {
                    console.log(`Error :${JSON.stringify(error)} `);
                    res.status('404');
                    res.send('resource not found');
                }
            });
            resolve(true);
        });
    }
}

module.exports = ClsProductController;