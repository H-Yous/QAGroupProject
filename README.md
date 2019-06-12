# QAGroupProject -   dev-branch

 * [Introduction](#introduction)
 * [Setup](#setup)
   + [Windows Installation](#windows-installation)
   + [Backend Setup](#backend-setup)
   + [Frontend Setup](#frontend-setup)
   + [Run Local Instance](#run-local-instance)
   + [Run Network Instance](#run-network-instance)
   + [Run Stripe Server](#run-stripe-server)
 * [Java Backend](#java-backend)
   + [Structure](#structure)
     - [Packages](#packages)
     - [Classes](#classes)
     - [Methods](#methods)
 * [React Frontend](#react-frontend)
 * [List of Tests](#list-of-tests)
 * [Current Todos](#current-todos)

## Introduction
This is a full-stack application of a cinema website created for [QA Consulting](https://consulting.qa.com/) with CRUD functionality created by Ali, Farhan, Humza, Jay, Mark, and Nick. This system is built with the following technologies:

- [Spring boot](https://spring.io/projects/spring-boot) for the backend.

- [ReactJS](https://reactjs.org/) for the frontend.

- [MongoDB](https://www.mongodb.com/) for the database.

A link to the backlog is given by [Atlassian](https://qacacademypurple.atlassian.net/secure/RapidBoard.jspa?rapidView=29&projectKey=CL2&view=planning.nodetail&selectedIssue=CL2-5).

## Setup
Clone this repository to a folder.
### Windows Installation
Go to this website [node](https://nodejs.org/en/) and download the installer. Check node is installed 
```
node -v
```

Check npm is installed
```
npm -v
```

Update npm to the latest version
```
npm install npm@latest -g
```

### Backend Setup
Go to the folder which you cloned from git hub and into the working-backend-sprint1 folder

```
cd working-backend-sprint1
```

Next build the package

```
mvn package
```

The command line needs to tell you the build was a success

![alt text](https://github.com/H-Yous/QAGroupProject/blob/dev-branch-booking/buildsuccess.PNG)

Go into the target folder

```
cd target
```

Finally run the jar file created using java

```
java -jar QACinemasAID-0.0.1.jar
```

## Frontend Setup
Open the command line in the root directory of the application:
```
npm install
```

#### Run local instance
```
cd qacinemas
npm start
```
will open a local instance at `http:\\localhost:5000`. 
#### Run network instance
```
npm run build
npx serve -s build
```
will open a local instance at `http:\\localhost:5000` and a network instance at `%YOUR_NETWORK_IP%:5000`.
#### Run Stripe server
```
npm install react-stripe-elements
npm install express body-parser stripe
node server.js
```
## Java Backend
### Structure
#### Packages
* com.qa.cinemas
  * .constants
  * .controller
  * .domain
  * .enums
  * .repositories
  * .service
* .test
#### Classes
* [x] .constants
  * [x] PROJ_CONSTANTS
* [x] .controller
  * [x] BookingController
  * [x] EventController
  * [x] MovieController
  * [x] NewReleaseMovieController
  * [x] UpcomingMovieController
* [x] .domain
  * [x] Booking
  * [x] DatabaseSequence
  * [x] Events
  * [x] Movie
  * [x] NewReleaseMovie
  * [x] NowShowingMovie
  * [x] UpcomingMovie
* [x] .enums
  * [x] DayTypes
  * [x] ScreenType
  * [x] ShowSlots
* [x] .repositories 
  * [x] BookingRepository
  * [x] EventRepository
  * [x] MovieRepo
  * [x] NewReleaseMovieRepository
  * [x] NowShowingMovieRepository
  * [x] UpcomingMovieRepository
* .service
  * [x] BookingService
  * [x] BookingServiceImpl
  * [x] EventService
  * [x] EventServiceImpl
  * [x] MovieService
  * [x] MovieServiceImpl
  * [x] NewReleaseMovieService
  * [x] NewReleaseMovieServiceImpl
  * [x] NowShowingMovieService
  * [x] NowShowingMovieServiceImpl
  * [x] UpcomingMovieService
  * [x] UpcomingMovieServiceImpl
  * [x] generateShowSequence
#### Methods
> TBD, proposed Project Structure, NOT FINAL
## React Frontend
>TBD
## List of Tests
>TBD
## Current Todos
- [ ] full setup guide
- [ ] finalised Project Structure
- [ ] explain EVERY class
- [ ] explain EVERY method
- [ ] explain EVERY test (frontend w/JUnit+Mockito, backend w/Selenium)

