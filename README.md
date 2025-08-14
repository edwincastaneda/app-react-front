# SCSS

Sistema de diseño

```
src/scss/
├── abstracts/
│   ├── _variables.scss    // Variables personalizadas y sobrescritas de Bootstrap
│   ├── _mixins.scss       // Mixins personalizados (ej: para media queries)
│   └── _functions.scss    // Funciones personalizadas
├── base/
│   └── _base.scss         // Estilos base (tipografía, body, etc.)
├── components/
│   ├── _buttons.scss      // Estilos para botones
│   ├── _forms.scss        // Estilos para formularios
│   └── _navbar.scss       // Estilos para la barra de navegación
├── layout/
│   ├── _header.scss       // Estilos del encabezado
│   └── _footer.scss       // Estilos del pie de página
└── main.scss              // Archivo principal que importa todo
```


## Explicación de las carpetas:

**abstracts/:** Contiene archivos que no se compilan directamente, sino que se utilizan para construir otros archivos. Aquí pones las variables, mixins y funciones que usarás en toda la aplicación.

**base/:** Contiene los estilos base de tu proyecto, como tipografía global, estilos del body y otras reglas CSS que se aplican a elementos HTML sin clases.

**components/:** Cada archivo representa un componente de tu UI. Por ejemplo, _buttons.scss contendrá los estilos para todos los botones de tu aplicación.

**layout/:** Define la estructura principal de tu sitio, como el encabezado, el pie de página o la barra lateral.

**main.scss:** Este es el archivo principal que importas en tu index.js. Su única función es importar todos los demás archivos en el orden correcto.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
