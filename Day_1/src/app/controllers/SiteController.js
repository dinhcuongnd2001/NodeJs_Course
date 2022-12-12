class SiteController {
  // [GET]/news
  index(req, res) {
    res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
  user(req, res) {
    res.render("user");
  }
}

module.exports = new SiteController();
