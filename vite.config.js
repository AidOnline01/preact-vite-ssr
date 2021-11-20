import preact from "@preact/preset-vite";
import ssr from "vite-plugin-ssr/plugin";

export default {
  server: {
    port: 7503,
    hmr: {
      path: 'wss',
      protocol: 'wss',
      clientPort: 7503,
      port: 7503
    }
  },
  plugins: [preact(), ssr()],
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-dom"
    }
  }
};
