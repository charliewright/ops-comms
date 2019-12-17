const ticket1 = {
    id: 1,
    jobType: "Plumbing diagnostic",
    client: "Bruno Soares",
    tier: "Tier 1" ,
    setterProtect: true,
    status: "Quoting",
    escalation: true,
    awaiting: "Reply from client",
    estimatedValue: "$150",
    closingPercentage: "%90"
  };


  const ticket2 = {
    id: 2,
    jobType: "Rios Deck Job",
    client: "Bruno Soares",
    tier: "Tier 3+" ,
    setterProtect: true,
    status: "Complete",
    awaiting: "-",
    estimatedValue: "$32,000",
    closingPercentage: "%30"
  };

  const ticket3 = {
    id: 3,
    jobType: "Drywall Repair",
    client: "Bruno Soares",
    tier: "Tier 1" ,
    setterProtect: true,
    status: "Complete",
    awaiting: "-",
    estimatedValue: "$170",
    closingPercentage: "%60"
  };

  const ticket4 = {
    id: 4,
    jobType: "Trash Pickup",
    client: "Justin Porter",
    tier: "Tier 1" ,
    setterProtect: true,
    status: "Complete",
    awaiting: "-",
    estimatedValue: "$350",
    closingPercentage: "%60"
  };


  const ticket5 = {
    id: 5,
    jobType: "Home Visit",
    client: "Bruno Soares",
    tier: "Tier 1" ,
    setterProtect: true,
    status: "Quoting",
    awaiting: "-",
    estimatedValue: "$0",
    closingPercentage: "%30"
  };
  
  
  export const tickets = [ticket1,ticket5, ticket2, ticket3, ticket4]