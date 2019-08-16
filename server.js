const express = require('express');


const server = express();

const ProjectRouter = require('./projects/projects-router')
const ResourceRouter = require('./resources/resources-router')


server.use(express.json());

server.use ('/api/projects', ProjectRouter)
server.use ('/api/resources', ResourceRouter)


module.exports = server;