import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from Shopping List');
});

export default router;  // ES module export
