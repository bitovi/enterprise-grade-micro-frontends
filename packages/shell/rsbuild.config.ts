import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

console.log(
  JSON.stringify(
    {
      moduleFederation: {
        options: {
          name: "shell-application",
          remotes: {
            catalog: `catalog@${process.env.MFE_URL_CATALOG}/remoteEntry.js`,
            order: `order@${process.env.MFE_URL_ORDER}/remoteEntry.js`,
            profile: `profile@${process.env.MFE_URL_PROFILE}/remoteEntry.js`,
            marketing: `marketing@https://marketing-mfe.bitovi-sandbox.com/remoteEntry.js`,
            workshop: `workshop@${process.env.MFE_URL_WORKSHOP}/workshop.js`,
          },
          shared: {
            "@mantine/core": {
              requiredVersion: "^7.10.2",
              singleton: true,
            },
            "@mantine/emotion": {
              requiredVersion: false,
              singleton: true,
            },
            "@mantine/notifications": {
              requiredVersion: false,
              singleton: true,
            },
            "react-router-dom": {
              requiredVersion: "^6.23.1",
              singleton: true,
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
    },
    null,
    2
  )
);

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
  moduleFederation: {
    options: {
      name: "shell-application",
      remotes: {
        catalog: `catalog@${process.env.MFE_URL_CATALOG}/remoteEntry.js`,
        order: `order@${process.env.MFE_URL_ORDER}/remoteEntry.js`,
        profile: `profile@${process.env.MFE_URL_PROFILE}/remoteEntry.js`,
        marketing: `marketing@${process.env.MFE_URL_MARKETING}/remoteEntry.js`,
        workshop: `workshop@${process.env.MFE_URL_WORKSHOP}/workshop.js`,
      },
      shared: {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@mantine/emotion": {
          requiredVersion: false,
          singleton: true,
        },
        "@mantine/notifications": {
          requiredVersion: false,
          singleton: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
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
