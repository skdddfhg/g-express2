var express = require('express')
var router = express.Router()

router.get('/', (req, res)=>{
    res.render('user', {name: "이동민"})
})

router.get('/about', (req, res)=>{
    res.render('detail', {detail:"얼굴만 큼"})
})

module.exports = router