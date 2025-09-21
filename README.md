

# Formulario React

Este proyecto es un formulario en React con validaciones dinámicas en tiempo real. Permite validar el formato de correo y la longitud mínima de la contraseña, mostrando mensajes de error bajo cada campo.

## Características principales

- Validación en tiempo real de los campos de correo y contraseña.
- Mensajes de error dinámicos bajo cada campo.
- Separación de la lógica de validación en `src/utils/validation.js` para facilitar el mantenimiento y la extensión.

## Estructura del proyecto

```
src/
	components/
		Formulario.js   # Componente principal del formulario (solo UI y estado)
		Navbar.js       # Componente de navegación
	utils/
		validation.js   # Funciones de validación reutilizables
	App.js           # Componente raíz
	index.js         # Punto de entrada
public/
	index.html       # HTML base
```

## Instalación y ejecución

## Instalación y ejecución


1. **Clona el repositorio:**
	```bash
	git clone <URL-del-repositorio>
	cd formulario-react
	```

2. **Instala las dependencias:**
	```bash
	npm install
	```

3. **Ejecuta la aplicación en modo desarrollo:**
	```bash
	npm start
	```
	Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la app.

## ¿Cómo modificar o extender la validación?

Las funciones de validación están en `src/utils/validation.js`. Puedes agregar nuevas funciones o modificar las existentes para validar otros campos según tus necesidades.

Ejemplo para agregar validación de nombre:

```js
export function validateNombre(nombre) {
  if (!nombre.trim()) return "El nombre es obligatorio.";
  return "";
}
```

Luego, importa y usa la función en el componente del formulario.


## Scripts disponibles

En el directorio del proyecto puedes ejecutar:



### `npm start`
Inicia la app en modo desarrollo.

### `npm test`
Ejecuta los tests en modo interactivo.

### `npm run build`
Compila la app para producción en la carpeta `build`.

### `npm run eject`
**¡Precaución!** Este comando es irreversible y solo recomendado para usuarios avanzados.

## Contacto y soporte

Si tienes dudas, sugerencias o encuentras algún problema, puedes abrir un issue en el repositorio o contactar al autor.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
