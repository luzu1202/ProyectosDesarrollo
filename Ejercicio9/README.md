# Ejercicio 9: back-end moderno

## ¿Qué hace este programa?

Este ejercicio ilustra en JavaScript conceptos habituales de una API: operaciones CRUD sobre productos, validación mediante un middleware y manejo de errores. Se trata de una simulación ejecutada en el navegador; no inicia un servidor ni realiza solicitudes de red.

## Cómo funciona

La página de [index.html](./index.html) contiene un elemento `pre` con el identificador `salida`. [script.js](./script.js) escribe allí la lista inicial de productos y también muestra en la consola ejemplos de las operaciones.

El arreglo `productos` funciona como modelo en memoria. Las funciones permiten:

- `listarProductos()`: devolver la lista.
- `crearProducto(nombre)`: agregar un producto.
- `obtenerProducto(id)`: buscar un producto por identificador.
- `actualizarProducto(id, nombreNuevo)`: cambiar su nombre si existe.
- `eliminarProducto(id)`: quitarlo de la lista si existe.

La simulación de `POST` crea una petición y una respuesta locales. `validarProducto()` comprueba que exista un nombre en el cuerpo de la petición y llama a `next()` con o sin error. `manejarError()` asigna el estado y el cuerpo de error; `simularPeticionPOST()` coordina el middleware y la creación del producto.

## Estilos

[styles.css](./styles.css) aplica formato básico al área `pre` donde se presentan los datos iniciales.

## Cómo probarlo

1. Abre [index.html](./index.html) en un navegador.
2. Revisa el resultado inicial mostrado en la página.
3. Abre la consola del navegador y comprueba los ejemplos de creación, actualización, eliminación y de solicitudes válidas e inválidas.

Los cambios solo existen en memoria durante la ejecución de la página y se reinician al recargarla.
