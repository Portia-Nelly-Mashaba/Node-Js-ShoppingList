import express from 'express';
import bodyParser from 'body-parser';
import shoppingListsRoutes from './routes/shoppingLists.js';  // ES module import

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Apply the shopping list routes
app.use('/shopping-list', shoppingListsRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
