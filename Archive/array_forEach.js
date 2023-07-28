const employees = [
    {
      name: "Rajini",
      gender: "M",
      married: "yes",
    },
    {
      name: "Kamala",
      gender: "F",
      married: "no",
    },
  ];
  
  const modifiedEmployees = [];
  
  employees.forEach((employee) => {
    modifiedEmployee = { ...employee, name: "Mr." + employee.name };
    modifiedEmployees.push(modifiedEmployee);
  });
  
  console.log(result)
  

  
  
  
  
  
  