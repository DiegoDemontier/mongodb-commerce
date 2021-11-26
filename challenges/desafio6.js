db.produtos.updateMany(
  {
    $or: [
      { nome: "Quarteirão com Queijo" },
      { nome: "Big Mac" },
    ],
  },
  { $addToSet: 
  { ingredientes: "bacon" } },
);

db.produtos.find(
  { },
  { _id: 0, nome: 1, ingredientes: 1 },
);