import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  html: {
    favicon: "./src/assets/favicon.png",
    title: "Marketing MFE",
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
});
