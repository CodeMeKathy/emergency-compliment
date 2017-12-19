app.set('port', process.env.PORT || 3001)

app.get('/', (req, res) => {
    res.render('app-welcome')
})

app.listen(app.get('port'), () => {
    console.log('It\'s aliiive!')
})
