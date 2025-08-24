module.exports = {
  apps: [{
    name: 'agritech-senegal',
    script: 'npm',
    args: 'run dev -- --port 3000',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    watch: false,
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G'
  }]
};
