import AxiosClient from '../modules/http/infra/usecases/AxiosClient';
import HttpHelper from '../modules/http/domain/usecases/HttpHelper';

const axiosHelper = new AxiosClient();
const appHttpHelper = new HttpHelper(axiosHelper);

export default appHttpHelper;
