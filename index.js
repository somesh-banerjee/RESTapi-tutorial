const http = require('http')
const app = require('express')()
const axios = require('axios')
const PORT = 9999

app.listen(
    PORT,
    () => console.log(`Server live on http://localhost:${PORT}`)
)

app.get('/simple', (req, res) => {
    res.status(200).send({
        flag: 'ok'
    })
})


app.post('/withParameter/:id', (req, res) => {
    const { id } = req.params
    res.status(200).send({
        flag: id
    })
})



  app.post('/withDelay/:id', (req, res) => {
    const { id } = req.params
    console.log(id);
    setTimeout(function() {
        res.status(200).send({
            flag: id
        })
      }, 3000);    
})

app.post('/callwithin/:id', (req, res) => {
    const { id } = req.params
    let response = http.get('http://localhost:9999/withDelay/123')
    console.log(response);
    res.status(200).send({
        flag: id
    })
})