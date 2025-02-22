import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  output: {
    sourceMap: {
      js: "source-map",
    },
  },
  plugins: [pluginReact()],
  source: {
    alias: {
      "@test": "./src/test",
    },
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  html: {
    favicon: "./src/assets/favicon.png",
    title: "Marketing Remotes",
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_MARKETING_DSN,
            release,
          }),
        }),
      ],
    },
  },
  moduleFederation: {
    options: {
      name: "marketing",
      filename: "remoteEntry.js",
      remotes: {
        order: `order@${process.env.MFE_URL_ORDER}/remoteEntry.js`,
        catalog: `catalog@${process.env.MFE_URL_CATALOG}/remoteEntry.js`,
      },
      exposes: {
        "./header": "./src/scenes/Header/index.ts",
        "./footer": "./src/scenes/Footer/index.ts",
        "./about": "./src/scenes/About/index.ts",
        "./contact": "./src/scenes/Contact/index.ts",
      },
      shared: {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@mantine/emotion": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
          eager: true,
        },
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
      },
    },
  },
});
