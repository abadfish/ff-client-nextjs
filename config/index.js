const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? process.env.REACT_APP_API_URL : process.env.NEXT_PUBLIC_API_URL;
