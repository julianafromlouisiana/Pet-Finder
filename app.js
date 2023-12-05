const express = require("express");
const app = express();
const PORT = 8080;

//Call all pets from API

const pets = [
    {id: 1, name: "Blue", owner: "Beth"},
    {id: 2, name: "Arty", owner: "Ben"},
    {id: 3, name: "Jeff", owner: "Doug"},

];

// Get all Pets
app.get('/api/v1/pets', (req, res) => {
    res.send(pets);
});

//Get pet by Name

app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

//Get pet by ownsers name
'/api/v1/pets/owner'

app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.params.owner;
    const pets = req.params.pets;
    res.send(`Hello ${owner}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});