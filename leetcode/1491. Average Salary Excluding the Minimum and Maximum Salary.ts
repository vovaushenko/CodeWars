// 1491. Average Salary Excluding the Minimum and Maximum Salary

// Given an array of unique integers salary where salary[i] is the salary of the employee i.

// Return the average salary of employees excluding the minimum and maximum salary.

const average = (salary: number[]): number => {
  const minSalary = Math.min(...salary);
  const maxSalary = Math.max(...salary);

  return (
    salary.filter((s) => s !== minSalary && s !== maxSalary).reduce((a, b) => a + b, 0) /
    (salary.length - 2)
  );
};
