const express = require('express');
const phones = require('../data/phones.json');

const router = express.Router();

router.get('/phones', (req, res) => {
  res.status(200).json(phones);
});

router.get('/phones/:id', (req, res) => {
  const id = req.params.id;
  const selectedPhone = phones.find(phone => phone.id === Number(id));
  console.log(selectedPhone);
  res.status(200).json(selectedPhone);
});

module.exports = router;