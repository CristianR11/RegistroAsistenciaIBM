const express = require('express');
const router = express.Router();

const Registrants = require('../models/registrants');
const Surveys = require('../models/surveys');
const event = require('../models/events');

router.post('/registrants/',async (req,res) =>{
  const registrants = new Registrants(req.body);
  await registrants.save();
  res.json({
    status:'Registro guardado'
  });
});


router.get('/events/',async (req,res) =>{
  const Event = await event.find();
  res.json(Event);
});

router.get('/events/:name',async (req,res) =>{
const Event = await event.find({ title:{'$regex' : req.params.name} });
  res.json(Event);
});


router.post('/surveys/',async (req,res) =>{
  const surveys = new Surveys(req.body);
  await surveys.save();
  res.json({
    status:'Registro guardado'
  });
});


module.exports = router;