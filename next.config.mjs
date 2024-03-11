const nextConfig = {
  env: {
    REACT_APP_API: 'https://proyecto-erne-be.onrender.com',
  },
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
  ],
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/perfil',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
