const express = require('express');
const service = require('./peoples.service')

// const { data } = require('../data');


const router = express.Router();

router.get('/', async (req, res) => {
    return service.sendPeople(req, res)
  });
  
  router.get('/:id', async (req, res) => {
   return service.findPeople(req, res)
  });
  
  router.post('/', async (req, res) => {
    return service.createPeople(req, res)
  });
  
  router.put('/:id', async (req, res) => {
    return service.updatePeople(req, res)
  });
  
  router.delete('/:id', async (req, res) => {
    return service.deletePeople(req, res)
  });
  
  module.exports = router;
  