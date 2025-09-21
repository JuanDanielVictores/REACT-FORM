# Formulario React

Este proyecto es un formulario en React con validaciones dinámicas en tiempo real. Permite validar el formato de correo y la longitud mínima de la contraseña, mostrando mensajes de error bajo cada campo.

## Requisitos previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (recomendado v16 o superior)
- [npm](https://www.npmjs.com/) (se instala junto con Node.js)
- Un editor de código, por ejemplo [Visual Studio Code](https://code.visualstudio.com/) o cualquier IDE de tu preferencia

## Características principales


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

