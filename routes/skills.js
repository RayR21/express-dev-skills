const express = require('express');u
const router = express.router();
const skillsController = require('../controllers/skills');
const skills = require('../controller/skills');

// Index route - list all skills
//GET/skills
router.get('/',skillsCtrl.index);

//GET /skill/new new
router.get("/new", skillsCtrl.new);

// Show route - display a specific skill
//GET/skills/:id
router.get('/:id',skillsCtrl.show);

//POST /skills
router.post("/", skillsCtrl.create);

// DELETE METHOD /skills/:id
router.delete("/:id", skillsCtrl.delete);

module.exports = router;