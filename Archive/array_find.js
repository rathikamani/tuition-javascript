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
    {
      name: "Kamala",
      gender: "F",
      married: "no",
    },
];

  const kamalaEmployee = employees.find(emp=>emp.name==="Kamala");

  console.log(kamalaEmployee);