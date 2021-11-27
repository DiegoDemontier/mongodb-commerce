db.produtos.find(
  {
    vendidos: { $mod: [5, NumberDecimal()] },
  },
  { _id: 0, nome: 1, vendidos: 1 },
);