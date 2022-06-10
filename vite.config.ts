import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reportsDirectory: "coverage/unit",
      reporter: ["text", "lcov"],
    },
  },
});
