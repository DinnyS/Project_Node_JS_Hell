const express = require('express');

// const { data } = require('../data');
const People = require('../models/peoples');

const router = express.Router();

router.get('/', async (req, res) => {
  const peoples = await People.findAll();
  res.send(peoples);
});

router.get('/:id', async (req, res) => {
  const people = await People.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(people);
});

let currentPeopleId = 11;
router.post('/', async (req, res) => {
  const { fname, lname, deathday, age, nationality, causeOfdeath, place, sin, time, hell, warden } = req.body;
  const people = await People.create({ 
    fname,
    lname,
    deathday,
    age,
    nationality,
    causeOfdeath,
    place,
    sin,
    time,
    hell,
    warden
  });
  res.json(people);
});

router.put('/:id', async (req, res) => {
  const { fname, lname, deathday, age, nationality, causeOfdeath, place, sin, time, hell, warden } = req.body;
  const people = await People.findOne({
    where: {
      id: req.params.id
    }
  });
  people.fname = fname;
  people.lname = lname;
  people.deathday = deathday;
  people.age = age;
  people.nationality = nationality;
  people.causeOfdeath = causeOfdeath;
  people.place = place;
  people.sin = sin;
  people.time = time;
  people.hell = hell;
  people.warden = warden;

  await people.save();

  res.json(people);
});

router.delete('/:id', async (req, res) => {
  await People.destroy({
    where: {
      id: req.params.id
    }
  });
  res.sendStatus(204);
});

module.exports = router;
