module.exports = (app) => {
  app.get("/", (req, res) => {
    console.log("home");
    res.render("index");
  });
};
