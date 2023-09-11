// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true, // <-- **
        hookTimeout: 9999999,
        setupFiles: "./setup.ts"
	},
});
