import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Replit-specific plugin, not needed for Vercel build
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"; 
import tsconfigPaths from "vite-tsconfig-paths"; // <--- 1. MAKE SURE THIS IS IMPORTED

export default defineConfig({
  plugins: [
    react(),
    // runtimeErrorOverlay(), // <--- 2. REMOVED THIS (it's for Replit, not Vercel)
    
    // 3. ADD THIS OBJECT to read your path aliases
    tsconfigPaths({ 
      // Tell the plugin where to find your tsconfig.json 
      // that defines the "#components" alias
      projects: [path.resolve(import.meta.dirname, "client", "tsconfig.json")],
    }),

    // This Replit-specific block will be empty in production, which is good.
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    // Your aliases are correct, no changes needed here
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  // This root setting is correct for your project structure
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // This outDir is also correct for your project structure
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
