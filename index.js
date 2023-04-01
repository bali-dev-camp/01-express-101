const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello express" });
});

let persons = [
  { id: 1, name: "Budi" },
  { id: 2, name: "Dipadana" },
  { id: 3, name: "Anto" },
  { id: 4, name: "Theo" }
]

app.get("/persons", (req, res) => {
  res.json({ persons: persons });
});

app.get("/person/:id", (req, res) => {
  const findPerson = persons.find((data) => {
    return data.id === Number(req.params.id)
  })

  res.json({ person: findPerson });
});

app.post("/person", (req, res) => {
  const newPerson = {
    id: persons[persons.length-1].id + 1,
    name: req.body.name
  }

  persons.push(newPerson)

  res.json({ person: newPerson });
})

app.put("/person/:id", (req, res) => {
  const personIndex = persons.findIndex((data) => {
    return data.id === Number(req.params.id)
  })

  persons[personIndex].name = req.body.name

  res.json({ person: persons[personIndex] });
})

app.delete("/person/:id", (req, res) => {
  const filteredPerson = persons.filter((data) => {
    return data.id !== Number(req.params.id)
  })

  persons = filteredPerson

  res.json({ message: `Data with id ${req.params.id} has been deleted` });
})

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});