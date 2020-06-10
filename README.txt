## EXPRESS: Full Stack
Learning the orders to creating an Express Fullstack app.

## Motivation
I want to do it correct the first time.

## Build status

## Code Order

##I. Create folders and files
  A. MAIN folder holding project

  B. Subfolders
    1. Client (client side)
      a. app.js (Brains of html page, JavaScript, activates html page )
      b. index.html (structure of html page, shows to client/front end)

    2. Routes (server side)
      a. api-routes.js 
      b. client-routes.js
      c. server.js

##II. Add packages
  A. npm init -y
  B. npm install Express
  C. npm install (other packages?)

##III. Get on Git Hub
  A. git init
  B. create .gitignore and add files not needed on Git Hub
  C. git add *
  D. git commit -m "..."
  E. create Git Hub repo
  F. add .gitignore to repo
  G. git add *
  H. git commit -m "..."
  I. git remote add origin "repo link"
  J. git push -u origin master
  K. git status

##IV. Set up client side
  A. app.js
    1. basic set up
    $(document).ready(function () {});
    2. add ajax

  

  C. style.css

##V. Set up Server side
  A. server.js--set up   
        const express = require...
        const app = express...
        const PORT = ("#")...
        const path = require...

        app.use(express.urlencoded...
        app.use(express.json...
        app.use(express.static...

        app.listen(PORT, ()=> {...

  B. Set Up index.html
    1. basic set up--html5
    2. link css--inside head
    <link rel="stylesheet" href="style.css" />
    3. link js--bottom of body, below jQuery file
    <script src="..."></script>
    4. link jQuery (minified)--bottom of body, above js file
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  
  C. api-routers.js--set up
        const express = require...
        const router = express...
        const path = require...

        router.get("./api",)...

        module.exports = router;

  C. client-routers.js--set up
        const express = require...
        const router = express...
        const path = require

        router.get(`/`, )...

        module.exports = router;

        

  D. server.js--set up routers




## Screenshots


## Tech/framework used
Ex. -

<b>Built with</b>
- [Electron](https://electron.atom.io)

## Features
What makes your project stand out?

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests
Describe and show how to run the tests with code examples.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Yourname]()