const express = require('express');
const router = express.Router();

router.all('*',async(req,res)=>{
    res.status(404).render('../views/404');
});

module.exports = router;