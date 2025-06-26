import jwt from 'jsonwebtoken'

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, 'Yash Bhavsar', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.sendStatus(401);
      } else {
        next();
      }
    });
  } else {
    return res.sendStatus(401);
  }
}

export default requireAuth;