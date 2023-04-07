module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
