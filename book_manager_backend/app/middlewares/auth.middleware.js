const jsonwebtoken = require('jsonwebtoken');
import GeneralFunctionService from '../services/generalfunction';

export default function authorizerMiddelware() {
  return async function (req, res, next) {
    try {
      let token = req.headers['x-access-token'] || req.headers.authorization;
      if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }
      if (token) {
        jsonwebtoken.verify(
          token,
          process.env.JWT_SECRET,
          async (err, decoded) => {
            if (err) {
            } else {
              if (req.headers && req.headers.authorization) {
                let isTokenVerified = await GeneralFunctionService.verifyToken(
                  req.headers.authorization.split(' ')[1]
                );
                if (isTokenVerified) {
                  req.decoded = decoded;
                  next();
                } else {
                  res.status(400).json({
                    success: 0,
                    message: 'Unauthorized User ',
                  });
                }
              }
            }
          }
        );
      } else {
        res.status(403).json({
          success: 0,
          message: 'Unauthorised request',
        });
      }
    } catch (error) {
      res.status(403).json({
        success: 0,
        message: 'Unauthorised request',
      });
    }
  };
}
