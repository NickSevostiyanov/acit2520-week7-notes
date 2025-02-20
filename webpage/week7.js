// Example of using a server (renting server #3. ):
    // Nettify (based in seattle):

    //          IN SERVER ROOM:
    //  ------------------------------
        // 1. (Always operational computer)
        // 2. (Always operational computer)
        // 3. (Always operational computer) <-- When rented, IP address is given (16.8.1.2)
        // 4. (Always operational computer)
        // 5. (Always operational computer)
    //  ------------------------------

    // 3$ a Month to rent computer 3. (server)
        // Address is given: 16.8.1.2
        //                   ^^^^^^^^
        // Server is physical computer

    // Inside Server 3:
        // Operating system (as a server is a physical device/hardware)
        // Install additional software:
            // Node.js + Python + discord etc..

        // Inside HardDrive:
            // example_file.html



// OVERALL MEANING OF ACIT2520:
    // Term project includes ALL topics covered from class
    // Process of request/response to/from server:
        // Uses 


    // USAGE OF SERVER REQUESTS/RESPONSE
        // http = streaming protocol

        // http REQUEST         <-- RS
            // request from device (host = 16.8.1.2)
            // Requests example.html from server

            // fs.readfile()
        
        // http RESPONSE        <-- WS
            // Server (16.8.1.2) looks are HardDrive
            // Finds example.html

            // Streams file to device
        




// Web Server Convention:
    // When opening a link (www.ramendanbo.com)
    // slash ( / ) is added automatically at the end

    // NOW BECOMES:
        // www.ramendanbo.com/
        //                ^
        // Slash at end signals to web server:
            // Send back HTML to device

    
// Key Takeaways about servers/http
    // HTTP allows devices to share files (communicate over internet)
