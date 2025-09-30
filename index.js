
import express from "express";

const app = express();
const PORT = 3000;

// Route for testing
app.get("/", (req, res) => {
  res.send("Hello, Express is running!");
});


app.get("/register", (req, res) => {
  res.redirect("myapp://gkui/register");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

