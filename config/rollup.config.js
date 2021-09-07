import { resolve } from "path";

import alias from "@rollup/plugin-alias";
import typescript from "@rollup/plugin-typescript";

const projectRootDir = resolve(__dirname, "..");

export default {
  input: "projectMain/index.ts",
  output: {
    sourcemap: true,
    format: "es",
    name: "app",
    dir: "projectDist",
  },
  plugins: [
    alias({
      entries: [
        {
          find: "#utils",
          replacement: resolve(projectRootDir, "projectCommons"),
        },
      ],
    }),

    typescript({
      sourceMap: true,
      inlineSources: true,
      tsconfig: "./projectMain/tsconfig.json",
    }),
  ],
};
