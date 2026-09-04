//NOTE: This is a mongo  query use https://mongoplayground.net/ to test this.

db.collection.update(
  {
    _id: "stock1",
  },
  {
    $set: {
      "assettodo.$[a].breakupdata.$[b].status": "Transfer",
    },
  },
  {
    arrayFilters: [
      {
        "a.material": "Laptop",
      },
      {
        "b.materialcode": "LAP002",
      },
    ],
  },
);
