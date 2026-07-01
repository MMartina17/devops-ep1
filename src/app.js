const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Microservicio DevOps EP1');
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Servidor iniciado en puerto 3000');
    });
}

module.exports = app; 