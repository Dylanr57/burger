var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, table, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    selectOne: function(table, id, cb) {
        var queryString = "SELECT * FROM ?? WHERE id = ?";

        connection.query(queryString, [table, id], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, value, cb){
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";

        connection.query(queryString, [table, value], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, col, value, id, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

        connection.query(queryString, [table, col, value, id], function(err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;