// Expressjs
    // npm install express
    // Uses res.send() method
        // Sends any data you want to web browser
        // Replaces res.write() + res.end()


// 2 Request Methods:
    // Get      <-- Requests items (Gets item)
    // Post     <-- Send information from server

// EJS
    // ejs = extended javascript
    // allows javascript in html
    // any .ejs MUST be in folder named "views"
    // <%= ANY JAVASCRIPT CODE CAN BE IN THIS SYNTAX %>
        // <%= "hello world".length %>



const express = require("express");

const app = express();
app.set("view engine", "ejs");  //  <-- Defines that ejs will be used

                        //    VVVVVVVV  <-- Ensures wether files are included in data (only strings will be used in this example, so false)
app.use(express.urlencoded( { extended: false } ));  // <-- Ensures express data received is put into dictionary and formatted
    // Returns web server ( Same as http.createServer() )

// 

    // href="/contact":
        // request url = localhost:5000/contact

        app.get("/", (req, res) => {
            res.send("<h1>My Website</h1> <a href='/contact'>Contact</a><a href='/login'>login</a>");
        });
    
    // If href="/contact" does not exist:
        // cannot GET /contact


    // /contact page Response:

        app.get("/contact", (req, res) => {
            res.send("<h1>Contact Us Page</h1>");
        });


    // Dashboard ( page only logged in users can see )
        app.get("/dashboard", async (req, res) => {
            // res.send("<h1>Welcome to the hidden page</h1>");
            const username = getUserFromDatabase();
                                // ^^^^^ Any variable will be set on dashboard.ejs
                                // ON TEST/UPCOMING PROJECTS = getUserFromDatabase();

                // const contents = await fs.readFile("dashboard.html", "utf8");
                // ---------------------------------------------------------
                // Instead of finding keywords to replace with data..
                //     contents = contents.replace("YOUR USERNAME IS:", username) // <-- replaces any string containing "YOUR USERNAME IS:" with data
                //     res.send(contents);
                // ---------------------------------------------------------
                // Replace dashboard.hmtl = dashboard.ejs
                // ejs = extended javascript (allows javascript in html)

            res.render("dashboard", { username });



        });

    // Login page ( with app.post() method )
        // Post = data to send to server
        // Browser sends login form to browser
        // Receives data from browser
        // Sends data to post:
            // actions = "/login"
            // method = "post"

        app.post("/login", (req, res) => {
            // req.body = Contacts of form (username, password)
            const { username, password } = req.body; //     <-- Decompose data
                // console.log(req.body);                   <-- Dictionary of data
        
            
            // LOG USER IN...
            res.redirect("/dashboard");
                // Sends response to web browser ( 302 + /dashboard)
                // When web browser receives 302
                // Web browser = needs to GET again
                // Web browser GET's from /dashboard
                


        });

    // Login page:
        app.get("/login", (req, res) => {
            // To ensure data is sent to server:
                // name="" method (NECESSARY FOR DATA TO BE GIVEN TO SERVER)

            res.send(`
                <form action="/login" method="post"> 
                    <input name="username" placeholder="Username">
                    <input name="password" placeholder="Password">
                    <button>Login</button>
                </form>
                `)
        });


app.listen(5000, () => {
    console.log("server is up!")
});