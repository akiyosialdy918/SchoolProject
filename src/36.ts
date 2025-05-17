const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const dataSources = [
    {
        name: 'Source1',
        url: 'http://example.com/source1'
    },
    {
        name: 'Source2',
        url: 'https://example.com/source2'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/source', (req, res) => {
    const sourceData = dataSources.find(d => d.url === req.body.url);
    if (sourceData) {
        console.log(`Successfully added ${dataSources.length} sources to the database.`);
        return res.status(201).send(sourceData);
    } else {
        return res.status(404).send('Source not found.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
