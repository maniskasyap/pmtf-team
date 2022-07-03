import got, { OptionsOfJSONResponseBody } from 'got';
// import config from '../config';

const options: OptionsOfJSONResponseBody = {
  // responseType: 'json',
  // resolveBodyOnly: true,
  retry: {
    limit: 0,
  },
};

const get = async (config: any) => {
  const reqConfig: any = { ...options, method: 'GET', url: config.url };
  // const result  = await got.get(config.url, options).json();
  // return result;
  return await got(reqConfig);
};

const post = async (config: any) => {
  try {
    const { url, data } = config;
    const reqConfig: any = { ...options, method: 'POST', url: url, json: data };

    return await got(reqConfig);
  } catch (error) {
    throw error;
  }
};

export { get, post };
