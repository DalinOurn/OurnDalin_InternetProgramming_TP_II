
const express = require('express');
const app = express()
const fs = require('fs')
app.get('/', (req, res) => {
fs.readFile('./fectch.html', 'utf8' , (err, html) => {
  if (err) {
    res.status(500).send(err)
    //console.error(err)
    return;
  }
  //console.log(data)
   res.send(html)
})
})

  app.get('/detail', function(req, res){
  fs.readFile('./fectch_detail.html', 'utf8', (err, html)=>{
      if(err){
          console.error(err)
          return
      }
      res.send(html)
  })
});
app.listen(3003, () => {
  console.log("Your app is running on localhost 3003");
})