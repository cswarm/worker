/**
 * Worker for swarm.
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 1.0.0
 * @license MIT
 **/

"use strict";

const kue   = require('kue');
const async = require('async');

const queue = kue.createQueue();

queue.process('newProject', (project, done) => {
  return newProject(project.data, done);
});

let newProject = (project, done) => {
  console.log('main: create project from', project.git);

  return done(false);
}
