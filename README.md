# `npm run build:rollup`

Error:

```
> rollup-ts-bug@1.0.0 build:rollup /Users/darek/dev/rollup-ts-bug
> rollup --config config/rollup.config.js

projectMain/index.ts → projectDist...
[!] Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
projectCommons/utils.ts (1:5)
1: type UtilType = () => string;
        ^
2:
3: export const util: UtilType = () => "test";
Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
    at error (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:151:30)
    at Module.error (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:10059:16)
    at Module.tryParse (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:10462:25)
    at Module.setSource (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:10365:24)
    at ModuleLoader.addModuleSource (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:19708:20)
    at async ModuleLoader.fetchModule (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:19761:9)
    at async Promise.all (index 0)
    at async ModuleLoader.fetchStaticDependencies (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:19792:34)
    at async Promise.all (index 0)
    at async ModuleLoader.fetchModule (/Users/darek/dev/rollup-ts-bug/node_modules/rollup/dist/shared/rollup.js:19768:9)
```

# `npm run build:tsc`

Builds fine:

```
> rollup-ts-bug@1.0.0 build:tsc /Users/darek/dev/rollup-ts-bug
> tsc --build projectMain/tsconfig.json
```
