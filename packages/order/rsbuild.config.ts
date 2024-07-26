import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
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
});
