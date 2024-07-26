import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  moduleFederation: {
    options: {
      name: "catalog",
      filename: "remoteEntry.js",
      exposes: {
        "./list": "./src/scenes/CatalogList/index.ts",
        "./filter": "./src/scenes/Filter/index.ts",
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
      },
    },
  },
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
      "@services": "./src/services",
      "@utilities": "./src/utilities",
    },
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_DSN_CATALOG,
            release,
          }),
        }),
      ],
    },
  },
  plugins: [pluginReact()],
});
