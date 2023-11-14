const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors());



app.use(express.json());



const tasks = [
    { id: 1, item: 'tasks 1' },
    { id: 2, item: 'tasks 2' },
    { id: 3, item: 'tasks 3' },
];

app.get('/api/v2/tasks', (req, res) => {
    res.json(tasks);
});




const Thehome = [
    { id: 1, item: 'Thehome 1' },
    { id: 2, item: 'Thehome 2' },
    { id: 3, item: 'Thehome 3' },
];

app.get('/api/v2/', (req, res) => {
    res.json(Thehome);
});






const thename = [
    { id: 1, item: 'name 1' },
    { id: 2, item: 'name 2' },
    { id: 3, item: 'name 3' },
];

app.get('/api/v2/name', (req, res) => {
    res.json(thename);
});




app.set("port", process.env.PORT || 5000);

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`we work in port  ${port}`); });

