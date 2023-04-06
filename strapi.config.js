module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      cwd: process.env.HOME + "/strapi",
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
