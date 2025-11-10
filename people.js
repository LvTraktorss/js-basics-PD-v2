let memberList = [
{firstName: "Adrians", lastName: "Marko", role: "leader", hours: 8}, 
{firstName: "Sergejs", lastName: "Sabovics", role: "leader", hours: 8}, 
{firstName: "Anna", lastName: "Kalniņa", role: "member", hours: 16}, 
{firstName: "Karlis", lastName: "Liberis", role: "member", hours: 24}, 
{firstName: "Adriams", lastName: "Masks", role: "member", hours: 15}, 
{firstName: "Gabriels", lastName: "Polis", role: "member", hours: 4},
{firstName: "Trevors", lastName: "Teteris", role: "member", hours: 39},
]


console.log("Līderu saraksts:");
for (let i = 0; i < memberList.length; i++) {
  if (memberList[i].role == "leader") {
    console.log(memberList[i].firstName + " " + memberList[i].lastName);
  }
}

let totalHours = 0;
for (let i = 0; i < memberList.length; i++) {
  totalHours += memberList[i].hours;
}





