// https://leetcode.com/problems/employee-importance/

// 690. Employee Importance

/*
You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.
*/

const GetImportance = (employees, id) => {
	let employee = findEmployeeById(employees, id);

	return calculateEmployeeValue(employee, employees);
};

const calculateEmployeeValue = (employee, staff) => {
	let value = 0;
	const { importance, subordinates } = employee;
	value += importance;

	for (let id of subordinates) {
		let foundEmployee = findEmployeeById(staff, id);
		value += calculateEmployeeValue(foundEmployee, staff);
	}

	return value;
};

const findEmployeeById = (employees, id) =>
	employees.find((employee) => employee.id === id);
