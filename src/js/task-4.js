const countTotalSalary = (employees) => {
  let totalSalary = 0;

  for (const values of Object.values(employees)) {
    totalSalary += values;
  }

  return `Total salary of all workers(${Object.keys(
    employees
  )}): ${totalSalary}`;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
