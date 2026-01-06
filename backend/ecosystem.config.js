module.exports = {
  apps: [{
    name: "portfolio-backend",
    script: "server.js",
    instances: "max",
    exec_mode: "cluster",
    watch: true,
    env: {
      NODE_ENV: "production"
    }
  }]
} 