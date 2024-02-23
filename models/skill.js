const skills = [
    {id: 111, skill: 'HTML', known: true},
    {id: 222, skill: 'CSS', known: true},
    {id: 333, skill: 'JavaScript', known: true},
    {id: 444, skill: 'Express.js', known: true},
    {id: 555, skill: 'Python', known: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};

function create(skill){
    skill.id = Date.now() % 1000000;
    skill.known = false;
    skills.push(skill)
};

function getAll(){
    return skills;
};

function getOne(id) {
    const skill = skills.find(t => t.id === parseInt(id));
    return skill;
}


