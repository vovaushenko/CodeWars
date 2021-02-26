// https://www.codewars.com/kata/55a1528cca4a6d4c5a0000e3

const employees = [
  { firstName: 'Ollie', lastName: 'Hepburn', role: 'Boss' },
  { firstName: 'Morty', lastName: 'Smith', role: 'Truck Driver' },
  { firstName: 'Peter', lastName: 'Ross', role: 'Warehouse Manager' },
  { firstName: 'Cal', lastName: 'Neil', role: 'Sales Assistant' },
  { firstName: 'Jesse', lastName: 'Saunders', role: 'Admin' },
  { firstName: 'Anna', lastName: 'Jones', role: 'Sales Assistant' },
  { firstName: 'Carmel', lastName: 'Hamm', role: 'Admin' },
  { firstName: 'Tori', lastName: 'Sparks', role: 'Sales Manager' },
  { firstName: 'Peter', lastName: 'Jones', role: 'Warehouse Picker' },
  { firstName: 'Mort', lastName: 'Smith', role: 'Warehouse Picker' },
  { firstName: 'Anna', lastName: 'Bell', role: 'Admin' },
  { firstName: 'Jewel', lastName: 'Bell', role: 'Receptionist' },
  { firstName: 'Colin', lastName: 'Brown', role: 'Trainee' },
];

const findEmployeesRole = (name) => {
  const [firstName, lastName] = name.split(' ');
  const foundEmployee = employees.find(
    (employee) => employee.firstName === firstName && employee.lastName === lastName
  );
  return !foundEmployee ? 'Does not work here!' : foundEmployee.role;
};
