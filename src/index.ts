const express = require('express')
const app = express()
const port = 3000

app.post('/helius', (req: { body: any; }, res: { send: (arg0: string) => void; }) => {
    const body = req.body;
    console.log(body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})