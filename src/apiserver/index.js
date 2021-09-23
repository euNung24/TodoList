const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
// const moment = require("moment");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
const main = express();

main.use("/api", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export function getlists() {
  app.post("/todolists", (req, res) => {
    const data = {
      ...req.body,
      datetime: admin.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("todolists")
      .add(data)
      .then((doc) => {
        db.collection("todolists")
          .doc(doc.id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              res.status(200).send(doc.data());
            } else {
              res.status(404).send({
                errorCode: 404,
                errorMessage: "자료가 존재하지 않습니다",
              });
            }
          });
      });
  });
}

app.get("/todolists/:id", (req, res) => {
  db.collection("todolists")
    .doc(req.params.id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.status(200).send(doc.data());
      } else {
        res.status(404).send({
          errorCode: 404,
          errorMessage: "자료가 존재하지 않습니다",
        });
      }
    });
});

module.exports = main;
