const express = require('express');
const router = express.Router();

router.get('/demo-vulnerabilidad', (req, res) => {

  // CORRECCIÓN: convertir la entrada en un número válido
  const numero = Number(req.query.code);

  if (!Number.isFinite(numero)) {
    return res.status(400).json({
      error: 'Se requiere un número válido'
    });
  }

  // Operación segura sin ejecutar código dinámico
  const resultado = numero * 2;

  return res.json({ resultado });

});

module.exports = router;
