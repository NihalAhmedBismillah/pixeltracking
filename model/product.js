
const shortid = require('shortid'),
    async = require('async'),
    _ = require('lodash');

class ClsProduct {

    constructor() {

    }


    // get Product List 
    static getProudctList(callback) {
        let productList = [];
        for (let i = 0; i <= 10; i++) {
            let product = {

                _id: shortid.generate(),
                category: `category_${i}`,
                name: `name_${i}`,
                price: `${Math.floor(Math.random() * (1000 - 1 + 1)) + 1}`,
                cover: `${global.appSetting.config.baseUrl}./../images/111.jpeg`,
                logUrl: ''

            }
            productList.push(product);
        }
        _.each(productList, (x) => {

            x.logUrl = `${global.appSetting.config.baseUrl}${x._id}?log=${new Buffer(`${x._id}/${x.name}/${x.price}`).toString('base64')}`;
        });
        callback(undefined, productList);
    }


}

module.exports = ClsProduct;