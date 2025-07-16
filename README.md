Step 1 - install npm packages express, mongoose,cors,jsonwebtoken,dotenv.

Step 2 - create the folder MVC pattern contollers (authenticateContoller.js for write register , login , and get all user functionality  ), models (authenticateSchema.js for add the schemas ), route(UserRoutes.js for write tha all method rotues ), middleware(add the middleware conditions and protected user info access) db/mydataBase.js (database connetion) and index.js

Step 3 - In index .js decleaer the express in app and runing in 3000 port or server port 

Step 4 - Connect the database in myDataBase.js import tha mongoose and connet the data base url with database name in connectDb arrow function and export the function (module .exports = functionname)

Step 5 - Then call the myDataBase.js in index.js

Step 6 - And we decide which datas we want to store mongodb have schemaless database so we add the schema using mongoose and here we add the condition type and reurired of username email and password .

Step 7 - Then we Create the methods register login , getalluser first import the schema and write the code for createRecipe creating the arrow async function pass the two parameter req and res its async function so try and catch and if it working try block execute ortherwise catch block execute . (1)create constent (Register) add the regiter user  module from Schema and (req.body ) and then save the value recipe.save() in await . if try block false go to catch block show the error same like other 4 function but first line change (2)login  user login function if the email and password correct then login the port  (3) getalluser here we using the middleware funtion if the totak is true show the all content if not show nit showing the details (login in time we can see the token .. so we add the jsonwebtoken ).. and if the user resigiter the portal dont save the actual password because easily can see the password in data base so we add bcrypt method to hash the password  

Step 8 - Then create the route using express roter in UserRouter.js import bthe express and rotue and import 5 function from recipeController . and set the patha name each method ex (router.post("/",register);) same like  other login and getAlluser (in getAlluser we add the middleware ) add the path  and wrote the each method router.method.

Step 9 - Schema controller and router completed so import in index.js import express, cors, myDataBase and recipRoute.. cors is middleware  it allow to accept the request from disrrent server  app.use(cors({ origin: "*" })). and call the database. app.use(express.json())  use for parse incoming JSON data from the request body. and app.use("/recipes", recipeRoutes)  use to import all the route in app.


Step 10 - Create a cluster in mongo db and set the mongodb url .env file then process the env file

https://www.postman.com/docking-module-operator-54362723/authentication/collection/80ko8ri/authenticaion
