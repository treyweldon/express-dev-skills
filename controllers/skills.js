const Skill = require('../models/skill');
const { getAll } = require('../models/skill');
const { request } = require('../server');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

function create(req, res){
    Skill.create(req.body);
    res.redirect('/skills');
};

function index(req, res){
    const skills = Skill.getAll();
    res.render('skills/skills.ejs', { skills: skills })
};

function show(req, res){
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show.ejs', { skill });
};

function newSkill(req, res){
    res.render('skills/new', { title: 'New Skill' });
};
