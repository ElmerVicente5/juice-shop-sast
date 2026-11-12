
const express = require('express');
const router = express.Router();

router.get('/demo-vulnerabilidad', (req, res) => {

  // VULNERABILIDAD INTENCIONAL: CWE-95
  const resultado = eval(req.query.code);

  res.json({ resultado });

});

module.exports = router;
