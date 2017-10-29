const env = process.env.NODE_ENV;
const config = {
  development: {
    url: {
      hotels: 'http://localhost:3000/api/hotels',
    }
  },
  production: {
    url: {
      hotels: '',
    }
  },
};

export const getUrl = (url) => config[env].url[url];
