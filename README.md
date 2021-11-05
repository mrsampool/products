# Ascent Squad API - Products Microservice

## Background

This repo contains Sam Pool's *System Design Capstone* project for the [Hack Reactor](https://www.hackreactor.com/) software engineering immersive program.

This assignment consisted of taking the functionality of an existing monolithic API for a mock e-commerce web app and dissecting it into a microservice architecture with the goal of improving the performance with higher traffic, with each microservice being built by a different developer.

The microservice contained in this repo is the ```/products``` endpoint, which returns data about the products available through the e-commerce app - product descriptions, styles, availability, prices, etc.

This microservice was built from scratch in 1.5 weeks.

---

## Deployment & Performance

To test this microservice's performance with a large dataset, the PostgreSQL database was a seeded with roughly 7 million records.

This microservice was then deployed with the following configuration: 

- 4 API Servers 
    - Docker images built from this repo
    - AWS EC2 t2 micro instances
- 1 Database Server
    - AWS EC2 t2 micro instances
- 1 Nginx Load Balancer
    - AWS EC2 XXL instance

This configuration was stress tested with LoaderIO, resulting with the following stats from one of the tests:

- 90,000 requests/minute
- 79ms avg request duration
- 0% error rate
---

## Primary Technologies

This app was built using the following primary technologies:

### API Server
- **ExpressJS**
    - NodeJS framework used to develop the API server.
- **PostgreSQL**
    - SQL RDMS used for data persistence - accessed via the **pg** driver package.

### Deployment ###
- **Amazon EC2**
    - Cloud computing service used to launch multiple API server instances
- **Nginx**
    - HTTP server used to load balance mutiple API server instances

### Testing
- **Jest**
    - Testing framework, primarily used for testing data model methods and API calls.
- **SuperTest**
    - Testing library used to make API server calls within Jest.
- **k6**
    - Testing library used to stress test the app locally
- **LoaderIO**
    - Developer tool used to stress test the deployed app

---

## Installation

Steps for getting started as a developer on this repo:

1. Clone this repo onto your local machine:
    - ```git clone https://github.com/mrsampool/products.git```
2. Navigate into the repo's root directory:
    - ```cd time-tagger```
3. Install the project's depencies:
    - ```npm install```
4. For local development, set up a local [PostgreSQL](https://www.postgresql.org/docs/) database.
    - Once your local database is available, create a ```db/config.js``` file exporting your local database connection info as ```dbConfig```.
4. Start developing!

---

## Provided Scripts

- ```npm run dev```
    - starts a development server which responds to requests from localhost - by default on localhost:3000 - then __watches for changes and restarts the server with updated content on each file change__.
- ```npm run test```
    - runs the app's full test suite via **Jest**, automatically running all files with a `.test.jsx` or `test.js` file extension.

---

## Project Structure

- ```server/```
    - files for the ExpressJS API server.
    - ```app.js```
      - The root server file - calls the API router to handle any requests to ```/api```.
      - ***NOTE:*** This file does not listen on any port - listening takes place in ```server/index.js```. This seperation allows the app to be tested the [supertest](https://www.npmjs.com/package/supertest) module without port conflicts.
      - ```app.test.js```
        - This file is contains integration tests using the [supertest](https://www.npmjs.com/package/supertest) library. These tests make requests to different endpoints in the app and check the responses that are returned.
    - ```index.js```
      - This file simply runs the ```app.js``` file described above on the port specified by the ```PORT``` environment variable or port 3000 if no other port is specified.
      - ***This is the file which launches this entire app***.
    - ```router.js```
      - Exports an ```express.Router()``` instance as ```router``` which connects the various API routes to their appropriate methods in ```controller.js```.
    - ```controller.js```
      - Exports methods which perform the functionality required to handle the various server requests - i.e. running appropriate methods from the data models (***see below***) and responding to the requests with the desired data.
- ```db/```
  - files related to the PostgreSQL database
  - ```models/```
    - Data models containing methods for interacting with the database, and tests for the models' methods.
  - ```index.js```
    - connects to a PostgreSQL database using connection info specified in ```db/config.js``` (gitignored) and exports the connection as ```pool```.
  - ```sqlScripts/```
    - ```.sql``` commands for importing / resetting development data, and a ```.sh``` script for running the SQL commands

- etc...
    - config files for jest, etc

---

## Questions / Comments?

Feel free to reach to developer Sam Pool about this project. I would love to hear from you!

- GitHub: [github.com/mrsampool](https://github.com/mrsampool)
- LinkedIn: [linkedin.com/in/sampool](https://www.linkedin.com/in/sampool/)
- Portfolio: [sampool.dev](https://sampool.dev/)
- Email: sambpool@gmail.com
