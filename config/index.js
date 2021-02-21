const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3001/api' : process.env.REACT_APP_API_URL;
