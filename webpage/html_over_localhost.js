// Acit2520
// Week7 (week6 skipped due to sickness)
// 2/20/25

// Week7 content below will NOT be on midterm

// ------------------------------------------
// Regular HTML file:
    // When opened:

        // file:///home/nick/bcit-cit/acit2520-web-app/week7/lecture/webpage/index.html
        // ^^^^^^^^ File URI Scheme
    
    // File URI Scheme:
        // Used to specifically identify a file on a computer

        // Wiki example:
            // file://host/path
            //      ^^ Why are there 2 slashs. When our example (HTML) has 3 (file:///home...)
    /*
    At Home Example:

                    Connects to underground wires
                    VVV
        Telus modem ------------------------------[Under Ocean]-----------[Connects to internet in Telus internet servers]
        |
        |
        |
        Router (LAN Local Area Network)
        ^^^^^^
            Wirelessly connects devices to internet
            Assigns connected devices a unique label identifier (IP Address)
    */ 
    
    // When using File URI Scheme (file://host)
    //  If html on same device as browser ^^^^
            // Unique device identifier = 127.0.0.1 (For computer which host is same location as file)


    // 127.0.0.1 = localhost
    // If host is omitted:
        // Default = localhost
    
    // Example:
        // Correct:
            // file://localhost/path = localhost =  127.0.0.1
        // Incorrect:
            // file:///path = localhost = 127.0.0.1

// --------------------------------
// FILE URI SCHEME has limitations:
    // Can only access localhost files within LAN
        // Cannot access files from other routes/hosts
    
    // Solution (smarter version to FILE URI SCHEME):
        // HTTP
        // ^^^^ Behaves same as URI scheme but is not limited to host only files

// Oversimplication of HTTP protocol:
    // Allows devices to communicate to any device on the internet


    // file:///path
    // ^^^^ Replace URI scheme with HTTP

    // http:///path/file
    // ^^^^ Allows access to any file on the internet

    // Example:
        // File with host IP address = 15.4.1.3

        // HTTP sees http://15.4.1.3/path
        //                  ^^^^^^^^        <-- Unique address, only 1 device in the world (Device where file is hosted)
        // ^^^^
        // HTTP provides firewall, to prevent randoms from reaching files from device (Via unqiue address)

            
            // http://15.4.1.3/path     --->    Requests file(s) from 15.4.1.3      --->    15.4.1.3(Device providing said file)    
            // ^^^^^^^^^^^^^^^^^^^^          (FIREWALL TO PREVENT STEALING FILES)           ^^^^^^^^
            //         \\\                                                                     |      
            //          -----------------------------------------------------------------------|    HTTPS requests files. Unique identity provides said file

            // Device with less firewall protection = Server (no longer considered local PC)



