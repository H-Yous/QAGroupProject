# QAGroupProject

- [QAGroupProject](#qagroupproject)
  * [Introduction](#introduction)
  * [Setup](#setup)
  * [Java Backend](#java-backend)
    + [Structure](#structure)
      - [Packages](#packages)
      - [Classes](#classes)
      - [Interfaces](#interfaces)
      - [Methods](#methods)
  * [React Frontend](#react-frontend)
  * [List of Tests](#list-of-tests)
  * [Current Todo list for readme](#current-todo-list-for-readme)

## Introduction
This is a group project by Ali, Farhan, Humza, Jay, Mark, and Nick. The project itself is a cinema website with CRUD functionality to a persistent MongoDB database, Spring Boot backend and React frontend. A link to the backlog is given by [Atlassian](https://qacacademypurple.atlassian.net/secure/RapidBoard.jspa?rapidView=29&projectKey=CL2&view=planning.nodetail&selectedIssue=CL2-5).
## Setup
Install springboot and maven. Download from git. You will also need to install node.js on your system.
## npm Setup
Open the command line in the root directory of the application:
```
npm install --save bootstrap
npm install --save reactstrap react react-dom
npm install react-scripts
cd qacinemas
```
#### Run a local instance
```
npm start
```
will open a local instance at `http:\\localhost:5000`. 
#### Run local and network instances
```
npm run build
npm serve -s build
```
will open a local instance at `http:\\localhost:5000` and a network instance at `%YOUR_NETWORK_IP%:5000`.
> Proposed Project Structure, NOT FINAL
## Java Backend
### Structure
#### Packages
* qacinemas
  * qacinemas.main
  * qacinemas.models
  * qacinemas.repository
  * qacinemas.control
  * qacinemas.test
#### Classes
* [x] Movie
* [x] MovieController
* [ ] CinemaController
* [ ] ScreenController
* [ ] UserController
* [ ] CinemaRepo
* [ ] ScreenRepo
* [ ] UserRepo
* [ ] CinemaScreen
* [ ] CinemaUser
#### Interfaces
* [ ] ConstantsInterface
* [x] MovieRepository
#### Methods
## React Frontend
## List of Tests
## Current Todo list for readme
- [x] create empty application with MongoDB/Spring/React/Bootstrap structure
- [ ] full setup guide
- [ ] finalised Project Structure
- [ ] explain EVERY class
- [ ] explain EVERY method
- [ ] explain ALL tests done to ensure product quality and functionality
