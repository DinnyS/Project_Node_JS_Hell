const People = require('../models/peoples');

async function sendPeople (req, res){
    const peoples = await People.findAll();
    res.send(peoples);
}

async function findPeople (req, res){
    const people = await People.findOne({
        where: {
          id: req.params.id
        }
      });
      res.json(people);
}

async function createPeople (req, res){
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
}

async function updatePeople (req, res){
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
}

async function deletePeople (req, res){
    await People.destroy({
        where: {
          id: req.params.id
        }
      });
      res.sendStatus(204);
}

module.exports = {
    sendPeople,
    findPeople,
    createPeople,
    updatePeople,
    deletePeople
}