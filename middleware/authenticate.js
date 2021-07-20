const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        
        const authHeader = req.headers['authorization']
        console.log(authHeader);
        const token = authHeader && authHeader.split(' ')[1]
        console.log(token);
        const decode = jwt.verify(token, 'PRIVATEKEY');
        req.user = decode;
        next();
    }
    catch(error) {
        res.json({
            massage : 'authenticate faild!'
        })
    }
}

module.exports = authenticate;