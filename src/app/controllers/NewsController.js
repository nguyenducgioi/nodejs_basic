class NewsController {
    // GET /news
    index(req, res) {
        return res.render('news')
    }

    // GET /new/:slug
    show(req, res) {
        return res.send('New Details!')
    }
}

module.exports = new NewsController