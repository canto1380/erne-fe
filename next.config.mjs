const nextConfig = {
  env: {
    REACT_APP_API: 'http://localhost:4000',
  },
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    // Add any additional Babel configurations here
  },
}

export default nextConfig
