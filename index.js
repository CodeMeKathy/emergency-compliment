const express = require('express')
const parser = require('body-parser')
const app = express()
// const router = express.Router()

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 6420)
app.set('view engine', 'hbs')

app.use('/assets', express.static('public'))
app.get('/', (request, response) => {
    response.render('app-welcome')
})

app.get('/:name', function (request, response) {
    var name = request.params.name
    response.render('app-welcome', { name })
    // response.send(`Hello ${request.params.name}`)

})

// app.post('/', (request, response) => {
//     // var newCompliment = request.params.newCompliment
//     // compliments.push(request.body.newCompliment)
//     var newCompliment = compliments.push(request.body.newCompliment)
//     setTimeout(request.redirect(`/`), 1000)
// })


app.post("/", (request, response) => {
    response.render("app-welcome", { newCompliment: request.body.newCompliment })
})

// app.get("/", function (req, res) {
//     res.redirect("/compliments");
// });
// app.post('/', (request, response) => {
    //     res.render('app-welcome', {
        //         compliments
        //       compliments.push(request.body.newCompliment)
        //     // setTimeout(request.redirect(`/`), 1000)
        // })
                   
app.listen(app.get('port'), () => {
console.log('It\'s aliiive!')
})
