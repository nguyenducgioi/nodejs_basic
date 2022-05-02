class SiteController {

    // GET /home:
    index(req, res) {
        return res.render('home')
    }

    // POST /info
    info(req, res) {
        return res.render('info')
    }
}

module.exports = new SiteController