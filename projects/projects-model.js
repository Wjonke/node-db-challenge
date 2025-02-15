const db = require('../data/db-config')

module.exports = {
  getProjects,
  updateProject,
  deleteProject,
  addProject,
  getTaskList, 
  getResourceList,
  addTask,
  getTasks
}


function getProjects(){
  return db('projects')
}

function getTasks(){
  return db('tasks')
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
  .innerJoin("resources as r", "r.id", "=", "pr.resource_id")
  .select("p.name", "r.name", "pr.quantity")
  .where({ "p.id" : id })
}


function getTaskList(id) {
  return db("tasks as t")
  .innerJoin("projects as p", "p.id", "=", "t.project_id")
  .select( "p.name", "t.description", "t.description" )
  .where({ "p.id" : id })
}



function addTask(tasks){
  return db('tasks')
  .insert(tasks, 'id')
}