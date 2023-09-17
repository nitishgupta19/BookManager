import moment from 'moment';
import jwt_decode from 'jwt-decode';
import AuthService from './auth.service';
class GeneralFunctionService {
  constructor() {}
  getCurrentTime = () => moment().format('HH:mm:ss');
  getCurrentDateTime = () => moment().format('YYYY-MM-DD HH:mm:ss');

  changeDate = (value) => {
    let dstfmt = 'DD/MM/YYYY';

    if (!value || value === '00/00/0000') return value;
    if (!moment(value).isValid()) return value;
    return moment(value).format(dstfmt);
  };

  verifyToken = async (token) => {
    try {
      var decoded = jwt_decode(token);
      let getUserDetails = await AuthService.getUserDetailById(decoded.id);

      if (decoded.access_key === getUserDetails[0]?.vAccessKey) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };
  verifyMyToken = async (token, id) => {
    try {
      var decoded = jwt_decode(token);
      let getUserDetails = await AuthService.getUserDetailById(decoded.id);
      if (
        decoded.access_key === getUserDetails[0].vAccessKey &&
        decoded.id === +id
      ) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export default new GeneralFunctionService();
