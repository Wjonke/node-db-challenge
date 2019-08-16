const express = require('express');
const Projects = require('./projects-model');
const router = express.Router();

//tests passed
router.get('/', (req, res) => {
  Projects.getProjects()
  .then(projects => {res.status(200).json(projects)})
  .catch(err => {res.status(500).json(err)})
});


//tests passed
router.post('/', (req, res) => {
  const addProject = req.body
  Projects.addProject(addProject)
  .then(project => {res.status(200).json(project)})
  .catch(err => {res.status(500).json(err)})
})
  

router.put('/:id', (req, res) => {
  const changes = req.body
  const {id} = req.params
  Projects.updateProject(changes, id)
  .then(project => {res.status(200).json(project)})
  .catch(err => {res.status(500).json(err)})
})


router.delete('/:id', (req, res) => {
const { id } = req.params;
Projects.deleteProject(id)
  .then(project => {res.status(200).json(project)})
  .catch(err => {res.status(500).json(err)})
})

router.get('/:id/resourcelist', (req, res) => {  
  const { id } = req.params; 
  Projects.getResourceList(id)  
    .then(project => {res.status(200).json(project)})  
    .catch(err => {res.status(500).json({message: "Big ole error"})  
  })
})

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
  .then(project => {res.status(200).json(project)})
  .catch(err => {res.status(500).json({message: "Big ole error"})})
})


module.exports = router