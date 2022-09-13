import express, { response } from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Ad 1'},
        {id: 2, name: 'Ad 2'},
        {id: 3, name: 'Ad 3'},
        {id: 4, name: 'Ad 4'},
    ])
})

app.listen(3333)