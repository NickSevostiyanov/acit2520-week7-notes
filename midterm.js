// MIDTERM:
    // No stream questions
// Open book
    // 50% Part1:
        // On learning hub
        // 10 questions
        // 15 questions
            // 1 MC on streams (look at streams slides)
        // Multi-choice (MC)
        // True/False   (TF)
        // VScode
    // 50$ Part2:
        // Written questions
        // 1 single question
            // menu/sushi csv
                // use .then .catch       ] Same thing, different syntax
                // OR async/await         ] Same thing, different syntax
        // fs.readfile
        // fs.writefile




// Example menu/sushi csv written problem:
    // Simply writing structure is majority of marks:

    const fs = require("node:fs/promises");

    function readCSV(csv) {}
    function groupdata(data) {}     // Not async
    function writeCSV(groupdata) {}
    
    async function main() {
        try {
            
                const data = await readCSV("myfile.csv");
                const groupedata = groupdata(data);                 // No await as func is not sync
                await writeCSV(groupdata);
                    
        } catch (error) {
            console.log(error);
        }
    }

main();