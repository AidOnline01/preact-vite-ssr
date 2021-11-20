import preact from "@preact/preset-vite";
import ssr from "vite-plugin-ssr/plugin";

export default {
  plugins: [preact(), ssr()],
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-dom"
    }
  }
};
