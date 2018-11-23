const axios = require('axios');
const { ObjectID } = require('mongodb');

const instance = axios.create({
    baseURL: 'https://my-api-38a2d.firebaseio.com/'
});

const order = {
    text: "Go home now!",
    completed: false,
    _id: new ObjectID()
};


axios.post('/', order)
    .then(response => console.log(error))
    .catch(error => console.log(error));



    //MongoDB ATLAS API: 2a061305-e83c-431f-b26c-c03405b0bf07

    //connection string
    //mongodb://user:<PASSWORD>@oms-testing-api-shard-00-00-hovgu.mongodb.net:27017,oms-testing-api-shard-00-01-hovgu.mongodb.net:27017,oms-testing-api-shard-00-02-hovgu.mongodb.net:27017/test?ssl=true&replicaSet=oms-testing-api-shard-0&authSource=admin&retryWrites=true
    
    //mongodb://user:<PASSWORD>@oms-testing-api-shard-00-00-hovgu.mongodb.net:27017,oms-testing-api-shard-00-01-hovgu.mongodb.net:27017,oms-testing-api-shard-00-02-hovgu.mongodb.net:27017/test?ssl=true&replicaSet=oms-testing-api-shard-0&authSource=admin&retryWrites=true