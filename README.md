npx nx run shell:dev
npx nx run-many -t dev
npx nx run-many -t dev --parallel=10

nx run <package-name>:<script>
nx run-many -t <script>

```json
{
  "extends": "nx/presets/npm.json",
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": [
          "typecheck",
          "lint",
          "depcheck",
          "test",
          "clean",
          "build"
        ]
      }
    }
  },
  "targetDefaults": {
    "typecheck": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"]
    },
    "build": {
      "dependsOn": ["^build", "clean"]
    },
    "dev": {
      "dependsOn": ["^build"]
    }
  }
}
```
