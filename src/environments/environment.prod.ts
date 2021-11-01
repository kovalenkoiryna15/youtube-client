require('dotenv').config();

const environment = {
  production: true,
  API_URL: `${process.env.API_URL}`,
};

export default environment;
