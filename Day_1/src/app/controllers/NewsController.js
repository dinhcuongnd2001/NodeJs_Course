class NewsController {
  // [GET]/news
  index(req, res) {
    res.render("news");
  }

  // :Slug: detail
  show(req, res) {
    res.send("this is the page detail");
  }
}

module.exports = new NewsController();
