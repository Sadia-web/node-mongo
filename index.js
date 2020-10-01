const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const users = ["asad", "Moin", 'Saber', 'Zabed', 'zara', 'sabana'];

// function rootCall(req, res){
//     res.send('Thank You very much')
// }


// const rootCall = (req, res) =>{
//     res.send('Thank you very much')
// }



// app.get('/', (req, res) =>{
//     res.send("Thank you for calling me");
// })

app.get('/', (req, res) =>{
    const fruit = {
        product: 'Apple',
        price:220
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) =>{
    res.send({fruit: 'Banana', quantity:1000, price:500});
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    console.log(req.query);
    const name = users[id];
    res.send({id, name});
    //console.log(req.params.id);
})


//post
app.post('/addUser', (req, res) =>{

    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(4200, () => console.log('Listening on port 4200'));