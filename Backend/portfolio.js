 {/* const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 7000;

let visitCount = 0;
if (fs.existsSync("visitCount.txt")) {
    visitCount = parseInt(fs.readFileSync("visitCount.txt", "utf8")) || 0;
}



// Middleware to log visitor details and update count
app.use((req, res, next) => {
    visitCount++; // Increase count by each visit
    fs.writeFileSync("visitCount.txt", visitCount.toString()); // Save updated count

    const log = `${new Date().toISOString()} - ${req.ip} visited ${req.url} | Total Visits: ${visitCount}\n`;
    fs.appendFileSync("visits.log", log);
    console.log(log);
    next();
});

// Route to get visit count 
app.get("/visit-count", (req, res) => {
    res.json({ visits: visitCount });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); */}

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors()); // Allow frontend requests

// Log file path
const logFilePath = path.join(__dirname, "visit.log");

// Generate a unique username for each user
function generateUsername() {
    return "user_" + Math.random().toString(36).substr(2, 8);
}


app.get("/", (req,res)=>{
    res.send("<h1>the home page</h1>")
})
// Endpoint to log visits
app.post("/log-visit", (req, res) => {
    let userId = req.body.userId || generateUsername(); // Use provided ID or generate new
    let timestamp = new Date().toISOString();
    
    const logEntry = `${timestamp} - ${userId} visited\n`;

    // Save log entry to visit.log
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error("Error logging visit:", err);
            return res.status(500).json({ message: "Error logging visit" });
        }
        res.status(200).json({ message: "Visit logged successfully", userId });
    });
});

// Endpoint to get recent logs
app.get("/get-logs", (req, res) => {
    fs.readFile(logFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading logs:", err);
            return res.status(500).json({ message: "Error reading logs" });
        }
        res.status(200).json({ logs: data.split("\n").filter(Boolean) });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
