const env = process.env.NODE_ENV;
const config = {
  mocked: {
    url: {
      hotels: 'http://localhost:3001/hotels',
    },
  },
  development: {
    url: {
      hotels: 'http://localhost:3000/api/hotels',
    },
  },
  production: {
    url: {
      hotels: 'http://localhost:3000/api/hotels',
    },
  },
};

export const getUrl = url => config[env].url[url];
export default config;
