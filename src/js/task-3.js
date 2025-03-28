const findBestEmployee = (employees) => {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [elem, tasks] of Object.entries(employees)) {
    maxTasks = Math.max(...Object.values(employees));

    if (tasks === maxTasks) {
      bestEmployee = elem;
      return bestEmployee;
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
