function feldest(persons) {
  if (persons.age >= 18) {
      console.log(`${persons.name} kinoya gede biler`);
  } else {
      console.log(`${persons.name} kinoya gede bilmez`);
  }
}

let persons = [
  {
      name: "Mike",
      age: 12,
      gender: "male"
  },
  {
      name: "Madeline",
      age: 80,
      gender: "female"
  },
  {
      name: "Cheryl",
      age: 22,
      gender: "female"
  },
  {
      name: "Sam",
      age: 30,
      gender: "male"
  },
  {
      name: "Suzy",
      age: 4,
      gender: "female"
  }
];

persons.forEach(persons=> feldest(persons));

  