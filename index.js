const jserver = require("json-server");
const jauth = require("json-server-auth");
const express = require("express");
const places = require("./places.json");
const users = require("./users.json");
const wishlist = require("./wishlist.json");

const app = jserver.create();
const ownRouter = jserver.router({
  places,
  users,
  wishlist,
});

const ownRouter1 = jserver.router("db.json");

const middlewares = jserver.defaults();

const port = process.env.PORT || 3000;

// /!\ Bind the router db to the app
app.db = ownRouter.db;

// You must apply the auth middleware before the router
app.use(middlewares);
app.use(jauth);
app.use(ownRouter1);
app.listen(port, () => {
  console.log("App started on", port);
});
