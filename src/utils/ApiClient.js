import axios from 'axios';
import { constant } from '../utils/Constants';

const API = axios.create({
   baseURL: constant.base_url,
   headers: {
      'Content-Type': constant.request_response_type,
      Accept: constant.request_response_type,
      apitoken: constant.apiToken,
   },
});

const consoledAPI = {
   ...API,
   post: (url, data, options) => {
      const requestParams = { url, data, options };
      const _title = (name) => `[API::POST] ${name} ${url}`;
      console.log(_title('request to'), { requestParams });
      const request = API.post(url, data, options);
      request
         .then((response) => {
            const { data, message, status } = response.data;
            console.log(
               _title('response from'),
               `, server-header: ${response.status}`,
               {
                  data,
                  message,
                  status,
               },
               {
                  response,
                  requestParams,
               }
            );
         })
         .catch((error) => {
            const { config, request, response } = error;
            console.log(`[API::error] catch from ${url}`, error, {
               requestParams,
               config,
               request,
               response,
            });
         });

      return request;
   },
   get: (url, options) => {
      const requestParams = { url, options };
      const _title = (name) => `[API::GET] ${name} ${url}`;
      console.log(_title('request to'), { requestParams });
      const request = API.get(url, options);
      request
         .then((response) => {
            const { data, message, status } = response.data;
            console.log(
               _title('response from'),
               `, server-header: ${response.status}`,
               {
                  data,
                  message,
                  status,
               },
               {
                  response,
                  requestParams,
               }
            );
         })
         .catch((error) => {
            const { config, request, response } = error;
            console.log(`[API::error] catch from ${url}`, error, {
               requestParams,
               config,
               request,
               response,
            });
         });

      return request;
   },
   put: (url, data, options) => {
      const requestParams = { url, data, options };
      const _title = (name) => `[API::PUT] ${name} ${url}`;

      console.log(_title('request to'), { requestParams });

      const request = API.put(url, data, options);

      request
         .then((response) => {
            const { data, message, status } = response.data;
            console.log(
               _title('response from'),
               `, server-header: ${response.status}`,
               {
                  data,
                  message,
                  status,
               },
               {
                  response,
                  requestParams,
               }
            );
         })
         .catch((error) => {
            const { config, request, response } = error;
            console.log(`[API::error] catch from ${url}`, error, {
               requestParams,
               config,
               request,
               response,
            });
         });

      return request;
   },
};

export default consoledAPI;
