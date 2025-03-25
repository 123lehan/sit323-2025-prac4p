const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid input: Both parameters must be numbers.");
  }
  const result = Number(num1) + Number(num2);
  res.send(`Result: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid input: Both parameters must be numbers.");
  }
  const result = Number(num1) - Number(num2);
  res.send(`Result: ${result}`);
});

app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid input: Both parameters must be numbers.");
  }
  const result = Number(num1) * Number(num2);
  res.send(`Result: ${result}`);
});

app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid input: Both parameters must be numbers.");
  }
  if (num2 == 0) {
    return res.status(400).send("Error: Division by zero.");
  }
  const result = Number(num1) / Number(num2);
  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`Calculator microservice is running on http://localhost:${port}`);
});
