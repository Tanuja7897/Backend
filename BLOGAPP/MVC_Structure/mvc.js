//we do not write everything(db , user) i single file instead we use mvc structre
//MVC Structure
// M , V , C are three components/folder of MVC
// M - Model: Represents the data and business logic //all db logic(schema and models)
// V - View: Represents the user interface  UI(Server sends ui to broswer for rendering)
        //Why "views" are not used in MERN (especially with MVC on the backend):
        // React is the View

        // In classic MVC (e.g., with Express + EJS or Pug), views are rendered server-side.

        // In MERN, React is the client-side view layer and is completely decoupled from the server.

        // Express/Node backend just serves data via APIs (mostly REST or GraphQL).

        // Backend serves as API-only:

        // The Express backend acts as the controller and uses models (e.g., Mongoose models for MongoDB) to handle data.

        // It doesn’t need to generate views (HTML pages) — it simply returns JSON responses to the frontend.

        // Separation of Concerns:

        // This architecture promotes a clean separation between frontend and backend.

        // Frontend (React) handles the UI and UX.

        // Backend (Node/Express) focuses purely on business logic, data processing, and API routing.

// C - Controller: Handles the user input and updates the model


// More 
// config - used to store configuration data
//routes - used to define the routes of the application


//Versoning ->
//API versioning is the process of managing and tracking changes to an API, ensuring that these changes are communicated effectively to the API's consumers. 
//This practice is crucial for maintaining consumer trust and ensuring the API remains secure, bug-free, and highly performant
//we write put("/api/v1/user")
// api -> tell that this is api not url
//v1 -> indicates verson 1
//user name of route


//trace in out app 
//go to server.js

// app.use("/api/v1/" , UserRoute)
// app.listen(3000 , ()=>{
//     console.log("server started")
//     DbConnect();
// })

// so output will be -> 3000/api/v1  ....iske bd ye UserRoute pe jayega 

// let say use ye route mila
// route.post("/users" , createUser) 


//so output will be -> 3000/api/v1/user
