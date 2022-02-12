const api = process.env.NODE_ENV === 'production' ? 'https://mywallet-mongo.herokuapp.com' : 'http://localhost:5000';

export {
  api,
};
