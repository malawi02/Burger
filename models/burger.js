const orm = ("../config/orm.js");


const Burger = {

    selectAll : (callback) => {

        orm.selectAll("Burgers", (results)=> {
            callback(results);
        });
    },

    insertOne : (cols, vals, callback) => {

        orm.insertOne("Burgers", cols, vals, (result)=>{
            console.log("Excuting Insert One Model");
            callback(result);
        });
    },

    updateOne : (cols, vals, condition, callback) =>{

        console.log("Executing Update One Model");

        orm.updateOne("Burgers", cols, vals, condition, (result)=> {
            console.log("Executing Second Declared CallBack");
            callback(result);
        });
    }
};




module.exports = Burger;