const express = require('express');
const Resources = require('./resources-model');
const router = express.Router();

//tests passed
router.get('/', (req, res) => {
  Resources.getResources()
  .then(resources => {res.status(200).json(resources)})
  .catch(err => {res.status(500).json(err)})
});

//tests passed
router.post('/', (req, res) => {
  const resource = req.body
  Resources.addResource(resource)
  .then(resource => {res.status(200).json(resource)})
  .catch(err => {res.status(500).json(err)})
})
  

router.put('/:id', (req, res) => {
  const changes = req.body
  const {id} = req.params
  Resources.updateResource(changes, id)
  .then(resource => {res.status(200).json(resource)})
  .catch(err => {res.status(500).json(err)})
})


router.delete('/:id', (req, res) => {
const { id } = req.params;
Resources.deleteResource(id)
  .then(resource => {res.status(200).json(resource)})
  .catch(err => {res.status(500).json(err)})
})



module.exports = router