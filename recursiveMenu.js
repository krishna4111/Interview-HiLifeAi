function buildMenuTree(data) {
  const map = {};
  data.forEach((item) => {
    map[item.name] = { name: item.name, children: [] };
  });

  const roots = [];
  data.forEach((item) => {
    if (item.parent === null) {
      roots.push(map[item.name]);
    } else if (map[item.parent]) {
      map[item.parent].children.push({ name: item.name });
    }
  });

  return roots;
}

const menu = [
  {
    name: "Employee",
    parent: null,
  },
  {
    name: "Employee List",
    parent: "Employee",
  },
  {
    name: "Employee Create",
    parent: "Employee",
  },
  {
    name: "Reports",
    parent: null,
  },
  {
    name: "Salary Report",
    parent: "Reports",
  },
];

const menuTree = buildMenuTree(menu);

console.log("Menu Tree is ===>", JSON.stringify(menuTree));
