import jwt from 'jsonwebtoken';

const authenticateUser = async (req, res, next) => {
    try {
        let bearerHeader = req.headers['authorization'];
        let token = bearerHeader.split(' ')[1];
        const verify = jwt.verify(token, process.env.SECRET_ACCESS_KEY);
        req.locals = verify.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'El usuario no está autenticado' });
    }
}

export default authenticateUser;