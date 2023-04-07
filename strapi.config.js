module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      max_memory_restart: "512M",
      cwd: "/data01/virt53516/strapi/source/",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
