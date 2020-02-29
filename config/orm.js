const connection = require("../config/connection.js");

const tableName = "Burgers";

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++ ) {
        arr.push("?");
    }
    return arr.toString();
}


const orm = {

    selectAll : (tableName,callback) => {

        let querryStatement = 'SELECT  * FROM ${tableName};';

        connection.querry(querryStatement, (err, result)=>{
            if (err) throw err;
            callback(result);
        });

    },

    insertOne : (tableName,cols,vals,callback) => {
        
        let querryStatement = 'INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.lenght)});';

        connection.querry(querryStatement, vals, (err, result) => {
            if (err) throw err;
            console.log("Successfully Added");
            callback(result);
        });
         
    },

    updateOne : (tableName, cols, vals, condition, callback) =>{

        let querryStatement = 'UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}';


        connection.querry(querryStatement, vals, (err, result) => {
            if (err) throw err;
            console.log("Successfully Updated");
            console.log("Executing Third Declared CallBack");
            callback(result);
        });
    }
}

module.exports = orm;
