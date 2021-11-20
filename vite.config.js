import react from "@vitejs/plugin-react";
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
  plugins: [react(), ssr()],
};
