const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Testing Changes');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '686701',
      price: 1009
    },
    {
      productId: '102',
      price: 150
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
