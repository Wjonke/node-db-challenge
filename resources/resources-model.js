const db = require('../data/db-config')

module.exports = {
  getResources,
  updateResource,
  deleteResource,
  addResource,
  
}

function getResources(){
  return db('resources')
}

function addResource(resource){
  return db('resources')
  .insert(resource, 'id')
}

function updateResource(){
  return db('resources')
    .update(changes)
    .where({ id })
}

function deleteResource(){
  return db('resources')
  .where({ id })
  .del();
}




