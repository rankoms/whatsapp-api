var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "SELECT * FROM users where id = 3";
    db.query(sql, function (err, result) {
        if (err) throw err;
        // console.log(result);

    });
});


module.exports = db;