var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    viewOne: function(id, cb){
        orm.selectOne("burgers", id, function(res){
            cb(res);
        });
    },
    create: function(value, cb){
        orm.insertOne("burgers", value, function(res){
             cb(res);
        });
    },
    update: function(value, id, cb){
        orm.updateOne("burgers", "devoured", value, id, function(res){
            cb(res);
        })
    }
};

module.exports = burger;