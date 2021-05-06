
const checkCity = require('../models/init')

const search = (city) => checkCity.exists({name:{$regex: new RegExp(`^${city}$`),$options:'i'}},function(err,docs){
    if(docs ==true){
        return "done"
    }else{
        return "false";
    }
})

test('search City', () => {
    expect(search("london")).toBe("done");
})
