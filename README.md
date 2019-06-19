# QAGroupProject -   dev-branch-actually-working

 * [Introduction](#introduction)
 * [Setup](#setup)
   + [Windows Installation](#windows-installation)
   + [Backend Setup](#backend-setup)
   + [Database Setup](#database-setup)
   + [Frontend Setup](#frontend-setup)
 * [Project Structure](#project-structure)
   + [Java Backend](#java-backend)
     - [Packages](#packages)
     - [Main Classes](#main-classes)
     - [Test Classes](#test-classes)
     - [Main Class Methods](#main-class-methods)
     - [Test Class Methods](#test-class-methods)
 * [React Frontend](#react-frontend)
   * [src](#src)
   * [src Methods](#src-methods)

## Introduction
This is a full-stack application of a cinema website created for [QA Consulting](https://consulting.qa.com/) with CRUD functionality.
The team, under the name of #TeamFaheem, is comprised of the following people:

- [Ali Alizada](https://www.linkedin.com/in/alizahid-alizada-b95204176/)
- [Nick Johnson](https://www.linkedin.com/in/nick-johnson-507204a5/)
- [Jay Konrad-Lee]()
- [Mark Muwonge]()
- [Farhan Owusu](https://www.linkedin.com/in/farhan-owusu-b2641a148/)
- [Humza Younus](https://www.linkedin.com/in/humza-younus-84b20b175/)


This system is built with the following technologies:

- [Spring boot](https://spring.io/projects/spring-boot) for the backend.
- [ReactJS](https://reactjs.org/) for the frontend.
- [MongoDB](https://www.mongodb.com/) for the database.

A link to the backlog is given by [Atlassian](https://qacacademypurple.atlassian.net/secure/RapidBoard.jspa?rapidView=29&projectKey=CL2&view=planning.nodetail&selectedIssue=CL2-5).

![alt text](https://github.com/H-Yous/QAGroupProject/blob/dev-branch/Architecture.png)

## Setup
### Windows Installation
Clone this repository to a folder on your system:
```
git clone https://github.com/H-Yous/QAGroupProject.git
cd QAGroupProject
checkout dev-branch-actually-working
```
Go to the [node.js](https://nodejs.org/en/) website and download the installer.
Check node and npm are installed with:
```
node -v
npm -v
```
Update npm to the latest version:
```
npm i npm@latest -g
```

### Backend Setup
In your local repository folder, build the package:
```
mvn clean package
```
If you have followed these steps, the following should appear:

![alt text](https://github.com/H-Yous/QAGroupProject/blob/dev-branch/buildsuccess.PNG)

Inside the folder, navigate to the generated .jar file and run it:
```
cd target
java -jar [jar-in-this-folder]
```
### Database Setup
Download the latest version of MongoDB Compass from the [mongodb](https://www.mongodb.com/products/compass) website.

## Frontend Setup
Open the command line in the root directory of the application:
```
npm i
npm start
```
This should open a local hosted copy of the site at `localhost:3000`.

## Project Structure
### Java Backend
#### Packages
* com.qa.cinemas
  * .constants
  * .controller
  * .domain
  * .enums
  * .event
  * .repository
  * .service
* com.qa.resources
* com.qa.test
#### Main Classes
(.java unless indicated)

* .constants
  * PROJ_CONSTANTS
  * Constants (encrypted)
* .controller
  * BookingController
  * CertificationController
  * ChargeController
  * ChosenSeatsController
  * ContactEmailController
  * EventController
  * MovieController
  * NewReleaseMovieController
  * NowShowingMovieController
  * PriceController
* .domain
  * Booking
  * Certification
  * Chosen Seats
  * ContactEmail
  * DatabaseSequence
  * Events
  * Movie
  * NewReleaseMovie
  * NowShowingMovie
  * StripeToken
  * Ticket
  * TotalPrice
* .enums
  * Days
  * Screens
  * ShowSlots
* .event
  * BookingModelListener
* .repository 
  * BookingRepository
  * CertificationRepository
  * ContactEmailRepository
  * EventRepository
  * MovieRepository
  * NewReleaseMovieRepository
  * NowShowingMovieRepository
* .service
  * BookingService
  * BookingServiceImpl
  * CertificationService
  * CertificationServiceImpl
  * ChartEventService
  * ChartEventServiceImpl
  * ContactEmailService
  * ContactEmailServiceImpl
  * EventService
  * EventServiceImpl
  * MovieService
  * MovieServiceImpl
  * NewReleaseMovieService
  * NewReleaseMovieServiceImpl
  * NowShowingMovieService
  * NowShowingMovieServiceImpl
  * SequenceGeneratorService
* .resources
  * application.properties
* ApplicationStartup
* PopulateMovieCertifications
* PopulateNewReleaseMovies
* PopulateNowShowingMovies
* QACinemasApp
* pom.xml
* settings.xml
#### Test Classes
* .test
  * ClassificationsTest
  * HomepageTest
  * MovieControllerTest
  * NewReleaseGalleryTest
  * ScreensTest
#### Main Class Methods
> TBD
#### Test Class Methods
> TBD

## React Frontend
### src
(.js unless indicated)

* assets
  * (redacted for brevity)
* components
  * Carousel
  * FooterPage
  * grabPoster
  * Jumbotron
  * Layout
  * NavigationBar
  * SearchBar
* bookingpage
  * BookingChart
  * BookingService
  * CreateScreen
* classificationpage
  * Classification
* contactpage
  * Contact
  * ContactPanel
* directionspage
  * Directions
  * DirectionsPanel
* homepage
  * Home
* *loginpage (deprecated)
  * *Login
  * *LoginPanel
* newreleasespage
  * NewReleases
  * NewReleasesInfo
* nowshowinginfo
  * NowShowing
  * nowShowing.css
  * NowShowingInfo
* paymentspage
  * CheckoutForm
  * Confirmation
  * DetailsForm
  * Payment
  * TicketForm
* screenspage
  * Screens
* App
* App.css
* App.test
* index.css
* index
* logo.svg
* NoMatch
* server
* serviceWorker
* stripeServer.bat
### src Methods
> TBC
