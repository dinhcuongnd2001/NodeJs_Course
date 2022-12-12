const hbs = require("express-handlebars");
const path = require("path");
const express = require("express"); /*Trong Node, khi muốn sử dụng một module, bạn sẽ phải dùng hàm require() với tham số là tên module*/
const app = express(); /* Khởi tạo một app mới sử dụng module express */
var morgan = require("morgan");
app.use(morgan("combined"));

// app.engine("handlebars", hbs.engine());
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(__dirname);
// port mà server sẽ chạy
const port = 3000;
const route = require("./routes");
// config router
route(app);

/*
Hàm listen() sẽ khởi động server. Hàm này có 2 tham số, 
+) tham số đầu tiên là port mà ứng dụng NodeJS của bạn sẽ chạy, 
+) tham số thứ 2 là một callback function sẽ được gọi khi server khởi động
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
