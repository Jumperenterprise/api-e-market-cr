const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const products = require('../sample.json');

router.get('/', (req, res) => {
    res.json(products);
});

router.post('/', (req, res) => {
    const id = products.length + 1;
    const { title, image, price, description } = req.body;
    const newProduct = { ...req.body, id };
    if (id && title && image && price && description) {
        products.push(newProduct);
        res.json(products);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { image, title, price, description } = req.body;
    if (id && title && image && price && description) {
        _.each(products, (product, i) => {
            if (product.id === id) {
                product.image = image;
                product.title = title;
                product.price = price;
                product.description = description;
            }
        });
        res.json(products);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(products, (product, i) => {
            if (product.id == id) {
                products.splice(i, 1);
            }
        });
        res.json(products);
    }
});

module.exports = router;