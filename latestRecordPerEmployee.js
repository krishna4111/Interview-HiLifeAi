//NOTE: This is a mongo  query use https://mongoplayground.net/ to test this.

db.collection.aggregate([
  {
    $sort: {
      employee: 1,
      date: -1,
    },
  },
  {
    $group: {
      _id: "$employee",
      latestRecord: {
        $first: "$$ROOT",
      },
    },
  },
  {
    $replaceRoot: {
      newRoot: "$latestRecord",
    },
  },
]);
