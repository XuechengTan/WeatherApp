import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import express from 'express';
import axios from 'axios';
import routes from '../weather';
let mongod, app, server;

beforeAll(async done => {

    mongod = new MongoMemoryServer();

    const connectionString = await mongod.getUri();
    await mongoose.connect(connectionString, { useNewUrlParser: true });

    app = express();
    app.use('/', routes);
    server = app.listen(3000, () => done());

});









const checkCity = require('../models/init')

const search = (city) => checkCity.exists({name:{$regex: new RegExp(`^${city}$`),$options:'i'}},function(err,docs){
    if(docs ==true){
        return "done"
    }else{
        return "false";
    }
})

test('search City', () => {
    expect(search('london')).toBe("done");
})
