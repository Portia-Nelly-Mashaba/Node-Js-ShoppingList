import express from 'express';

const router = express.Router();

const shoppingList = [
    {
        id: "1",
        name: "Milk",
        quantity: 2,
        price: 1.50,
        purchased: false
      },
      {
        id: 2,
      name: "Bread",
      quantity: 1,
      price: 2.00,
      purchased: true
      }
      
    
]

router.get('/', (req, res) => {
    console.log(shoppingList);
    res.json(shoppingList);
    
  res.send('Hello from Shopping List');
});

router.post('/', (req, res) => {
    const newItem = req.body; 
    
    shoppingList.push(newItem);  
    
    res.send(`new item with name ${newItem.name} added to the Shopping list!`);
})

export default router;  // ES module export
