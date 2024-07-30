import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  moduleFederation: {
    options: {
      name: "shell-application",
      remotes: {
        marketing: "marketing@http://localhost:3004/remoteEntry.js",
        catalog: "catalog@http://localhost:3001/remoteEntry.js",
        profile: "profile@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@mantine/emotion": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@tanstack/react-query": {
          requiredVersion: "^5.48.0",
          singleton: true,
        },
      },
    },
  },
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  html: {
    favicon: "./src/assets/favicon.png",
    title: "The Shell Application",
    tags: [
      {
        tag: "base",
        attrs: { href: "/" },
        append: false,
      },
    ],
  },
  plugins: [pluginReact()],
});
