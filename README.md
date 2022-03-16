# Librería de componentes

La librería de componentes está hecha para que pueda usarse en proyectos javascript y typescript.

Incluye la posibilidad de realizar pruebas unitarias.

Además, incluye Storybook.

## ESLINT

1. Instalamos la librería de eslint: `npm install eslint --save-dev` o si utilizamos yarn `yarn add eslint -D`
2. Ejecutamos la siguiente instrucción para configurar eslint: `npx eslint --init` o `npm init @eslint/config`
3. Si estamos usando Eslint a la vez que Prettier se recomienda instalar la siguiente librería: `npm install eslint-config-prettier --save-dev`

## PRETTIER

1. Instalamos la librería prettier: `npm install prettier --save-dev`  o si utilizamos yarn `yarn add prettier -D`

## LINT STAGED (Recomendada por Prettier)

1. Instalación: `npx mrm lint-staged`




# TODO

- Cambiar paths relativos por paths absolutos y que compile la librería.




# ¿Cómo crear una librería de componentes desde cero usando TypeScript?

## Tutorial

1. Crear carpeta react-component-library
2. Inicializar proyecto con las propiedades por defecto: `npm init`
3. Crear carpeta src
4. Crear carpeta componentes dentro de src
5. Crear carpeta Button dentro de componentes
6. Intalar dependencias: `npm install react react-dom typescript @types/react --save-dev`
7. Desarrollamos el componente Button
8. Creamos los ficheros index.ts para exportar el componente Button y el fichero index.ts en la carpeta src
7. Inicializamos el fichero de configuración typescript: `npx tsc --init`

        {
            "compilerOptions": {
            /* Visit https://aka.ms/tsconfig.json to read more about this file */
        
            /* Projects */
            // "incremental": true,                              /* Enable incremental compilation */
            // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
            // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
            // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
            // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
            // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
        
            /* Language and Environment */
            //"target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
            // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
            // "jsx": "preserve",                                /* Specify what JSX code is generated. */
            // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
            // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
            // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
            // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
            // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
            // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
            // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
            // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
        
            /* Modules */
            //"module": "commonjs",                                /* Specify what module code is generated. */
            // "rootDir": "./",                                  /* Specify the root folder within your source files. */
            // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
            // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
            // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
            // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
            // "typeRoots": [],                                  /* Specify multiple folders that act like `./node_modules/@types`. */
            // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
            // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
            // "resolveJsonModule": true,                        /* Enable importing .json files */
            // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */
        
            /* JavaScript Support */
            // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
            // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
            // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */
        
            /* Emit */
            // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
            // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
            // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
            // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
            // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
            // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
            // "removeComments": true,                           /* Disable emitting comments. */
            // "noEmit": true,                                   /* Disable emitting files from a compilation. */
            // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
            // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
            // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
            // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
            // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
            // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
            // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
            // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
            // "newLine": "crlf",                                /* Set the newline character for emitting files. */
            // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
            // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
            // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
            // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
            // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
            // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */
        
            /* Interop Constraints */
            // "isolatedModules": true,                            /* Ensure that each file can be safely transpiled without relying on other imports. */
            // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
            // "esModuleInterop": true,                          /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
            // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
            // "forceConsistentCasingInFileNames": true,         /* Ensure that casing is correct in imports. */
        
            /* Type Checking */
            //"strict": true,                                      /* Enable all strict type-checking options. */
            // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
            // "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
            // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
            // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
            // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
            // "noImplicitThis": true,                           /* Enable error reporting when `this` is given the type `any`. */
            // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
            // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
            // "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
            // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
            // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
            // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
            // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
            // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
            // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
            // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
            // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
            // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
        
            /* Completeness */
            // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
            // "skipLibCheck": true                              /* Skip type checking all .d.ts files. */
            }
        }


8. Instalamos Rollup y sus dependencias: 

    `npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts tslib rollup-plugin-postcss postcss rollup-plugin-peer-deps-external rollup-plugin-terser sass node-sass --save-dev`

9. Cremos el fichero rollup.config.js y rellenamos su configuración.

        import resolve from "@rollup/plugin-node-resolve";
        import commonjs from "@rollup/plugin-commonjs";
        import typescript from "@rollup/plugin-typescript";
        import postcss from "rollup-plugin-postcss";
        import dts from "rollup-plugin-dts";

        const packageJson = require("./package.json");

        export default [
            {
                input: "src/index.ts",
                output: [
                {
                    file: packageJson.main,
                    format: "cjs",
                    sourcemap: true,
                },
                {
                    file: packageJson.module,
                    format: "esm",
                    sourcemap: true,
                },
                ],
                plugins: [
                resolve(),
                commonjs(),
                typescript({ tsconfig: "./tsconfig.json" }),
                postcss(),
                ],
            },
            {
                input: "dist/esm/types/index.d.ts",
                output: [{ file: "dist/index.d.ts", format: "esm" }],
                plugins: [dts()],
                external: [/\.(css|less|scss)$/],
            },
        ];

10. Actualizamos el package.json con las variables main y module que hemos creado en la configuración del fichero rollup.config.js

        "main": "dist/cjs/index.js",
        "module": "dist/esm/index.js",
        "types": "dist/index.d.ts",
        "files": ["dist"],

11. Ejecutamos el script para lanzar rollup y ya tendremos nuestra librería. 

        "build": "rm dist && rollup -c"


## AÑADIR PRUEBAS UNITARIAS

1. Creamos la carpeta tests dentro de src.
2. Instalar librerías para poder realizar pruebas: `npm install @testing-library/react @testing-library/jest-dom jest @types/jest identity-obj-proxy --save-dev`
3. Creamos el fichero para la prueba y la implementamos.
4. Cremos el fichero jest.config.js

        module.exports = {
            testEnvironment: "jsdom",
            moduleNameMapper: {
            ".(css|less|scss)$": "identity-obj-proxy",
            },
        };

5. Instalar librerías para que reconozca ficheros tsx: `npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev`
6. Creamos el fichero babel.config.js npm install

        module.exports = {
            presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
            ],
        };

7. Añadimos el script en el package.json 
        
        "test": "jest"

8. Ejecutamos `yarn test`

### AÑADIR STORYBOOK

1. Añadimos Storybook a nuestra aplición: `npx sb init`
2. Desinstalamos los addons que ha añadido inicialmente excepto: 

        "@storybook/addon-links"
        "@storybook/addon-essentials"
        "@storybook/preset-scss"

3. Instalamos las siguientes librerías: `npm install html-webpack-plugin postcss-flexbugs-fixes autoprefixer --save-dev`

4. Creamos el fichero postcss.config.js con los siguientes datos:

        module.exports = {
            plugins: [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                flexbox: 'no-2009',
                }),
            ],
        };

5. Inyectamos la configuración del postcss en la configuración de rollup

        postcss({
            config: {
                path: "./postcss.config.js",
            },
            extensions: [".css",".scss"],
            extract: false,
        }),

4. Creamos nuestro fichero stories
5. Ejecutamos el script para ver en local nuestro storybook.



### Para versiones con Storybook >= 7
[Es necesario instalar postcss](https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users#rollup "Es necesario instalar postcss")

        npm install postcss --save-dev