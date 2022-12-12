const newsRoute = require("./news");
const siteRoute = require("./site");
function route(app) {
  /*
    Hàm get() sẽ có 2 tham số, 
    +) tham số đầu tiên là địa chỉ mà server sẽ nhận request từ client, 
    +) tham số thứ 2 là một function xử lý request (req) và gửi kết quả trả về gọi là response (res). 
    Hàm send() làm một hàm gửi kết quả trả về. Ở đây mình sẽ trả về một chuỗi là: "Hello World"
*/
  //   app.get("/", (req, res) => {
  //     console.log(req.query);
  //     res.render("home");
  //   });

  //   app.get("/user", (req, res) => {
  //     res.render("user");
  //   });

  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });
  app.use("/news", newsRoute);
  app.use("/", siteRoute);
  //   app.get("/search", (req, res) => {
  //     console.log(req.query);
  //     res.render("search");
  //   });

  //   app.post("/search", (req, res) => {
  //     console.log(req.body);
  //     res.render("search");
  //   });
}

module.exports = route;
