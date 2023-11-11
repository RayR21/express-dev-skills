const Skill = require("../model/skill");
const index = (req, res)=> {
    res.render("skills/index", {
        skills: Skill.getAll(),
        title: "New Skill"
    });
};

function show(req, res) {
    res.render("skills/show", { 
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render("skills/new")
};

function create(req, res) {
    //reference the model HERE 
    Skill.create(req.body);
    res.redirect("/skills")
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect("/skills")
};

module.exports = {
    index, 
    new: newSkill, 
    create,
    show,
    delete: deleteSkill
};