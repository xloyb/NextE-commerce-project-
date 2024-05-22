const jwt = require('jsonwebtoken');
const auth = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).send({
            success: false, message: 'No token provided'
        });
    }
    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if (err) {
            return res.status(401).send({
                success: false, message: 'Invalid token'
            });
        }
        req.user = user;
        next();
    });
}
module.exports = auth;