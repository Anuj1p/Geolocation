const express = require('express')
const router = express.Router()
const {posts } = require('./model.js')

router.post('/post', async (request,response)=>{

    const post = new posts({
        name : request.body.name,
        lat : request.body.lat,
        long  : request.body.long
           
    })

    post.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
} )


router.get('/post', async (req,res)=>{

    try {
        const pos = await posts.find();
        res.send(pos);
      } 
      catch (e) {
        res.status(400).send(e);
      }
       
    })






module.exports = router;