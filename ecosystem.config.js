module.exports = {
  apps: [{
    name: 'agritech-senegal',
    script: 'npm',
    args: 'run dev',
    env: {
      HOST: '0.0.0.0',
      PORT: 3000,
      NODE_ENV: 'development'
    },
    watch: false,
    instances: 1,
    exec_mode: 'fork'
  }]
}
