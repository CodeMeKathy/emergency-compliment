const express = require('express')
const app = express()


app.set('port', process.env.PORT || 3001)
app.use('/assets', express.static('public'))
app.get('/', (req, res) => {
    res.render('app-welcome')
})

app.set('view engine', 'hbs')

app.listen(app.get('port'), () => {
    console.log('It\'s aliiive!')
})

