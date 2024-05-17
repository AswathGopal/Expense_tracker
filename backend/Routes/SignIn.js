const express = require('express')
const router = express.Router()
const con = require('../Database/db.js')
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')

router.post("/signup", async (req, res) => {
  const { name, email, password, age, address } = req.body;
  console.log(req.body);
  // Validation
  if (!name || !email || !password || !age || !address) {
    return res.status(400).send('Please fill in all fields');
  }

  if (name.length > 30) {
    return res.status(400).send('Name must be within 30 characters');
  }

  if (password.length < 8) {
    return res.status(400).send('Password must be greater than 8 characters');
  }

  if(password.length <0){
    return res.status(400).send("Password cannot be negative");
  }

  if (!Number.isInteger(parseInt(age))) {
    return res.status(400).json({ error: 'Age must be an integer' });
  }

  const sql = `INSERT INTO user (name,email,password,age,address) VALUES(?,?,?,?,?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Hash Error" });
    console.log(hash.toString());
    con.query(sql, [
      req.body.name,
      req.body.email,
      hash,
      req.body.age,
      req.body.address,
    ], (err, result) => {
      if (err) return res.send({ "message": "query error occured" });
      if (!err) {
        console.log("result", result);
        const token = jwt.sign({
          email: email
        },
          "jwt_secret_key",
          { expiresIn: "1d" }
        );
        res.status(200).json({ "signupStatus": true, "message": "successfully Signed in",token });
      } 
    });
  });
});

module.exports = router;
