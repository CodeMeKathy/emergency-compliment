const express = require('express')
const app = express()


app.set('port', process.env.PORT || 6420)
app.set('view engine', 'hbs')

app.use('/assets', express.static('public'))
app.get('/', (req, res) => {
    res.render('app-welcome')
})

app.get('/:name', function (request, response) {
    var name = request.params.name
    response.render('app-welcome', { name })
    // response.send(`Hello ${request.params.name}`)

})

app.listen(app.get('port'), () => {
    console.log('It\'s aliiive!')
})

app.get('/:name', function (request, response) {
    response.render('app-welcome',`Hello ${request.params.name}`)
 

})

