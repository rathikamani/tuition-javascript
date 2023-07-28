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

  
  const modifiedEmployees = employees.map((employee)=>({...employee,name:"Mr."+employee.name}))
  
  console.log(employees,modifiedEmployees)
  
  
  
  
  
  