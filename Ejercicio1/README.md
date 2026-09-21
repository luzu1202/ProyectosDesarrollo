# Ejercicio 1: tarjeta de presentación

## ¿Qué hace este programa?

Este ejercicio muestra una página personal con una estructura simple y moderna. La idea es presentar información básica sobre una persona: nombre, descripción, habilidades y medios de contacto.

La página está dividida en tres secciones principales:

- Sobre mí
- Habilidades
- Contacto

Además, incluye un pequeño botón para ocultar o mostrar la lista de habilidades y un pie de página con el año actual.

## Cómo funciona

La estructura principal está en [index.html](./index.html):

- `header`: contiene el nombre y la navegación.
- `main`: incluye las secciones de contenido.
- `section id="sobre-mi"`: presenta una breve descripción y un avatar circular.
- `section id="habilidades"`: contiene una lista de habilidades y un botón para mostrar u ocultar esa lista.
- `section id="contacto"`: muestra un correo de contacto con enlace `mailto`.
- `footer`: muestra el texto del copyright y el año generado dinámicamente.

La lógica de interacción está en [script.js](./script.js):

- Obtiene el botón `toggleHabilidades` y la lista `listaHabilidades`.
- Al hacer clic, alterna la clase `oculto` en la lista.
- Cambia el texto del botón entre “Ocultar habilidades” y “Mostrar habilidades”.
- Actualiza el atributo `aria-expanded` para que sea accesible a lectores de pantalla.

## ¿Cómo se hizo?

### HTML
Se construyó usando elementos semánticos como `header`, `main`, `section`, `footer`, y enlaces de navegación. Eso ayuda a la organización y a la accesibilidad de la página.

### CSS
En [styles.css](./styles.css) se definieron:

- fondo general claro
- estilo del encabezado y del footer
- diseño del avatar circular
- formato de botones y enlaces
- estados de foco visibles
- un ajuste responsive para pantallas pequeñas

También se usa `flex-wrap` en la navegación para que los enlaces se adapten bien en celulares.

### JavaScript
Se usa JavaScript para:

- mostrar u ocultar la lista de habilidades
- cambiar el texto del botón
- actualizar el valor del atributo `aria-expanded`
- asignar el año actual en el footer

El resultado es una página ligera, clara y fácil de navegar.
