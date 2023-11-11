const skills = [
  {id: 1, skill: "Javascript", done: true},
  {id: 2, skill: "Python", done: true},
  {id: 3, skill: "Html", done: true}
];


function getAll() {
  return skills;
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  //Generate a new id.
  skill.id = Date.now() % 1000000;

  skill.done = true;
  skills.push(skill);

};

function deleteOne(id) {
  id = parseInt(id);
  //Find the index for the skill
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

module.exports =  {
  getAll,
  create,
  getOne,
  deleteOne 
};
  