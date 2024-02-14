const Skill = require('../models/skill');
const { getAll } = require('../models/skill');
const { request } = require('../server');

function index(req, res){
    const skills = Skill.getAll();
    res.render('skills/skills.ejs', { skills: skills })
}

function show(req, res){
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show.ejs', { todo });
}


module.exports = {
    index,
    show,
};