const fs = require("node:fs/promises");
const net = require("node:net");
const http = require("node:http");
// ------------------------------------
// http://localhost = your computer/device




//                Returns web server
//                VVVVVVVVVVVVVVVV
const webServer = http.createServer()

// Refresher:
    // localhost = your own device/pc

    // When using localhost://localhost/path in browser
    // Browser has two options:
        // provide 


webServer.listen();
    // Creates loop in webserver
    // Requires port number ( unique identifier )

webServer.listen(5000);
console.log("server is running")



// IN BROWSER:
    // Enter: localhost:5000
    // ^^^^^^^^^^^^^^^^^^^^^
    // Nothing changes, as request is made to this file (identified by port 5000)
    // Response is not given

    const app = http.createServer(listener);
    app.listen(5000)


    // What is res.write():
        // Writes to buffer
    // What is res.end():
        // Gives buffer, flushes down stream via web response (concatenates all writes)

    // Example:
        // res.write("hello")   <-- Writes to buffer
        // res.write("world")   <-- Writes to buffer
        // res.end()            <-- Sends buffer response ("hello world") <-- Notice all res.write(s) are concatenated

        // EQUIVALENT:
            // res.end("hello world")   <-- Avoid extra steps


    // Create a request/reponse function:

        //                RS    WS
        //                VVV  VVV
        function listener(req, res) {
            // FUNCTION WILL SEND RESPONSE when port is called
            
            // Goal:
                // res.write("return statement to port 5000") <-- Loads into buffer
                // res.end()                 <-- Takes all buffers, flushes down stream via web response

            res.end("<h1>Welcome to my site!</h1>");

        }

const response_example = http.createServer((req, res) => {
    res.end("<h1>Welcome to my site!</h1>");

});

app.listen(5000, () => {
    console.log("Server is running");
});
    
// --------------------------------------------------------
    // With reponse functions defined:
    // In browser:
        // localhost:5000
        // Returns: <h1>Welcome to my site!</h1>


        // How to send entire file of data?

            const response_example_readfile = http.createServer(async (req, res) => {
                const data = await fs.readFile("example_file.html", "utf8");
                res.end(data);
            
            });


            