// const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");
// const db_url = "mongodb://localhost:27017/curd";
const db_url =
  "mongodb+srv://radhakrishnan:<password></password>@cluster0.fx6ouyb.mongodb.net/curd?retryWrites=true&w=majority";
mongodb.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongodb.connection;

con.on("open", function () {
  console.log("db connected...");
});
