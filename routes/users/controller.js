const { connection } = require('../../config');

module.exports = {
    userRegistration: (req, res) => {
        const { fullName, email, password } = req.body;

        const query = `INSERT INTO mysql_demo.users (fullName, email, password) VALUES ('${fullName}', '${email}', '${password}')`;
        connection.query(query, function (error, result, fields) {
            if (error) {
                res.send({
                    message: 'Registration failed',
                    error,
                });
            } else {
                res.send({
                    message: 'Registration successful',
                    result: result,
                });
            }
        });
    },
};
