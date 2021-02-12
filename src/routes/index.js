const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Jumper',
        website: 'jumper.com'
    };
    res.json(data);
});  

module.exports = router;
