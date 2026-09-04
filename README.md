# HiLife Tech — Round 3 Assessment (Problem Solving)

## Folder Structure

```
hilife-tech-round-3/
├── stockRaceCondition.js       # Q1 - MongoDB query
├── nesterArrayUpdate.js        # Q2 - MongoDB query
├── latestRecordPerEmployee.js  # Q3 - MongoDB query
├── recursiveMenu.js            # Q4 - Plain JS/Node
└── README.md
```

Files containing an actual MongoDB query are marked at the top with:

```javascript
//NOTE: This is a mongo db query
```

## How Each Was Tested

**Q1 — Stock Race Condition:** Not easily testable as a single static query, since it requires two concurrent requests hitting the DB at the same time. The atomic `findOneAndUpdate()` logic and a `Promise.all()`-based simulation are included in `stockRaceCondition.js` for reference — running it needs a real MongoDB connection (local or Atlas), not a query playground.

**Q2 & Q3:** Tested on [mongoplayground.net](https://mongoplayground.net) — pasted the sample data and query from each file, ran it, and verified the output matched the expected result.

**Q4:** Plain Node.js, no database needed. Tested by running it directly:

```bash
node recursiveMenu.js
```

## Setup Instructions

1. Install [Node.js](https://nodejs.org)
2. Open the folder in VS Code, open a terminal
3. Run any file with:
   ```bash
   node ./filename.js
   ```
   (For Q1/Q2/Q3, a MongoDB connection — local `mongod` or Atlas — is needed if running via terminal instead of mongoplayground.)

## Solution Summary

**Q1:** `findOneAndUpdate()` checks stock (`available: { $gte: qty }`) and decrements it in one atomic call, so concurrent requests never push `available` below 0.

**Q2:** `arrayFilters` with `$[a]`/`$[b]` targets only Laptop → LAP002 without touching LAP001 or MON001.

**Q3:** Aggregation — sort by date descending, `$group` by employee with `$first`, then `$replaceRoot`.

**Q4:** Recursive function filters by `parent`, builds children recursively, only adds `children` key when children exist.

## Author

KrishnaMoorthy k
