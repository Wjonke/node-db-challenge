const db = require('../data/db-config')

module.exports = {
  getProjects,
  updateProject,
  deleteProject,
  addProject,
  getTasks, 
  getResourceList
}


function getProjects(){
  return db('projects')
}


function addProject(projects){
  return db('projects')
  .insert(projects, 'id')
}

function updateProject(){
  return db('projects')
    .update(changes)
    .where({ id })
}

function deleteProject(){
  return db('projects')
  .where({ id })
  .del();
}

function getResourceList(id) {
  return db("projects as p")
  .innerJoin("projects_resources as pr", "p.id", "=", "pr.project_id")
  .innerJoin("resources as r", "r.id", "=", "pr.resources_id")
  .select("p.name", "r.name", "pr.quantity")
  .where({ "p.id" : id })
}


function getTasks(id) {
  return db("projects")
  .select("projects.tasks")
  .where({ id })
}

