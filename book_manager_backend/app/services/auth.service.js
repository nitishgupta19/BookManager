import db from '../config/database';

class AuthService {
  constructor() {}

  signup = (data) => {
    return db('users').insert(data);
  };

  getUserDetailByEmail = (email) => {
    return db('users').select('*').where('vEmail', email);
  };

  getUserDetailById = (id) => {
    return db('users').select('*').where('iUserId', id);
  };

  updateUserAccessKey = (id, accessKey) => {
    return db('users').select('*').where('iUserId', '=', id).update({
      vAccessKey: accessKey,
    });
  };

  logoutUser = (id) => {
    return db('users')
      .select()
      .where({
        iUserId: id,
      })
      .update({ vAccessKey: '' });
  };
}

export default new AuthService();
