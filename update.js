var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    // kita akan mengubah alamat Starbucks
    let sql = `UPDATE users
               SET session_wa='LEM Lantai 1'
               WHERE id=3`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});