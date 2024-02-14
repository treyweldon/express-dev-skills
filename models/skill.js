const skills = [
    {id: 1, skill: 'HTML', known: true},
    {id: 2, skill: 'CSS', known: true},
    {id: 3, skill: 'JavaScript', known: true},
    {id: 4, skill: 'Express.js', known: true},
    {id: 5, skill: 'Python', known: false},
];

module.exports = {
    getAll,
    getOne,
}

function getAll(){
    return skills;
};

function getOne(id) {
    const skill = skills.find(t => t.id === parseInt(id));
    return skill;
}
