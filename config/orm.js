const con = require('./connection.js'),
    printQuestionMarks = num => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push('?');
        }
        return arr.toString();
    };

const objToSql = obj => {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        };
        console.log(arr, 'array')
    }
    return arr.toString();
}

const orm = {
    selectAll: (table, _cb) => {
        let query = `SELECT * FROM ${table};`;
        con.query(query, (err, res) => {
            if (err) throw err;
            _cb(res);
        });
    },
    insertOne: (table, columns, values, _cb) => {
        let query = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)});`;
        console.log(query);
        con.query(query, values, (err, res) => {
            if (err) throw err;
            _cb(res);
        });
    },
    updateOne: (table, objColVals, condition, _cb) => {
        let query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE id = ${condition};`;
        console.log(query);
        con.query(query, (err, res) => {
            if (err) throw err;
            _cb(res);
        });
    },
    delete: (table, condition, _cb) => {
        let query = `DELETE FROM ${table} WHERE ${condition};`;
        console.log(query);
        con.query(query, (err, res) => {
            if (err) throw err;
            _cb(res);
        });
    }
};

module.exports = orm;