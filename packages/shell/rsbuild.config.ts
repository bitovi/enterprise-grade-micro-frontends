import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  html: {
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
