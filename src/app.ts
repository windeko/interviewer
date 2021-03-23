import express from 'express'

import { router as questionsRouter } from './questions/router'

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome, stranger');
});

app.use(express.json())

app.use('/questions', questionsRouter)

// @ts-ignore
app.listen(process.env.PORT,(err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${process.env.PORT}`);
});
