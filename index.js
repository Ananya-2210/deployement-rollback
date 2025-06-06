// // index.js
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello from version 1.0.0</h1>");
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// // Latest Working Code 1.1
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello from version 1.0.0"));

// app.listen(port, () => console.log(`App running on port ${port}`));


const express = require("express");
const app = express();
const port = 3000;

// Introduce a syntax error to simulate failure (missing parentheses)
app.get("/", (req, res) => res.send("Hello from version 1.2";)  // Error here

app.listen(port, () => console.log(`App running on port ${port}`));
