import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const shoppingList = [];

// GET route
router.get('/', (req, res) => {
    console.log(shoppingList);
    res.json(shoppingList);  // Only send this response
});

// POST route
router.post('/', (req, res) => {
    const newItem = { ...req.body, id: uuidv4() };  // Add a unique id
    shoppingList.push(newItem);  // Push the new item to the shopping list
    res.send(`New item with name ${newItem.name} added to the Shopping list!`);
});

router.get('/:id', (req, res) =>{
  res.send('THE GET ID ROUTE');
})

export default router;
