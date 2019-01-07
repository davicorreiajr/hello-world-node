import express from 'express';
const app = express();

const port = 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});

app.get('/url', (req, res) => {
  res.json(['Bleus', 'Test', 'Michael', 'Ginger', 'Food']);
});
