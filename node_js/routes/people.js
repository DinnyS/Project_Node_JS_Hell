const express = require('express');

const { data } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const peopleId = Number.parseInt(req.params.id);
  const people = data.find((people) => people.id === peopleId);
  res.json(people);
});

let currentPeopleId = 11;
router.post('/', (req, res) => {
  const { fname, lname, deathday, age, nationality, causeOfdeath, place, sin, time, hell, warden } = req.body;
  const people = {
    id: ++currentPeopleId,
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
  };
  data.push(people);
  res.json(people);
});

router.put('/:id', (req, res) => {
  const { fname, lname, deathday, age, nationality, causeOfdeath, place, sin, time, hell, warden } = req.body;
  const peopleId = Number.parseInt(req.params.id);
  const people = data.find((people) => people.id === peopleId);

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

  res.json(people);
});

router.delete('/:id', (req, res) => {
  const peopleId = Number.parseInt(req.params.id);
  const peopleIndex = data.findIndex((people) => people.id === peopleId);
  data.splice(peopleIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
