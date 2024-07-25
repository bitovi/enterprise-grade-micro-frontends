import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  output: {
    sourceMap: {
      js: "source-map",
    },
  },
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
    alias: {
      "@test": "./src/test",
      "@services": "./src/services",
      "@components": "./src/components",
      "@utilities": "./src/utilities",
    },
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_DSN_ORDER,
            release,
          }),
        }),
      ],
    },
  },
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "order",
      filename: "remoteEntry.js",
      exposes: {
        "./cart": "./src/scenes/Cart/index.ts",
        "./checkout": "./src/scenes/Checkout/index.ts",
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
        "@mantine/notifications": {
          requiredVersion: false,
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
        "@tanstack/react-query": {
          requiredVersion: "^5.48.0",
          singleton: true,
        },
      },
    },
  },
});
