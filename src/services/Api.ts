import config from "../config/app";
// import requestConfig from "../config/request";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const getUsers = (params:{page:number}) => {
  const url = `${API_ENDPOINT}/users?page=${params.page}`;
  return API.get(url);
};
