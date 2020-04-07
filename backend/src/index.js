const express = require('express');

const app = express();



app. get('/projects', (request, response)=>{
    return response.json([
        {id: 1},
        {id: 2}
    ]);
});

app.post('/projects', (request,response)=>{
    return response.json([
        {id: 1},
        {id: 2},
        {id: 3}
    ]);
})

app.put('/projects/:id', (request,response)=>{
    return response.json([
        {id: 1},
        {id: 2},
        {id: 3}
    ]);
})

app.delete('/projects/:id', (request,response)=>{
    return response.json([
        {id: 1},
        {id: 2},
        {id: 3}
    ]);
})



app.listen(3001, ()=> {
    console.log("Subiuuuuuuu");
});

