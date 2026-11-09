# Auditoría - Ejercicio 9

## Alcance

Se revisaron la presentación del resultado, las operaciones CRUD sobre el arreglo en memoria, la validación de la petición simulada y la construcción de respuestas de error.

## Elementos verificados por revisión de código

- El documento declara español y un viewport adaptable.
- El elemento `salida` recibe la lista inicial serializada como JSON.
- Las funciones CRUD buscan, agregan, actualizan y eliminan productos del arreglo en memoria.
- El middleware `validarProducto()` envía un error con estado 400 si falta el cuerpo o el nombre.
- La ruta simulada llama al manejador de errores cuando el middleware comunica un error.
- Las llamadas de ejemplo muestran en consola los casos válido e inválido.

## Pruebas funcionales sugeridas

1. Abrir `index.html` y comprobar que se muestra la lista inicial de productos.
2. Revisar la consola y comprobar los resultados de listar, crear, actualizar y eliminar.
3. Comprobar que la simulación de `POST` con nombre devuelve estado 201.
4. Comprobar que la simulación de `POST` sin cuerpo o sin nombre devuelve estado 400 y un objeto de error.
5. Invocar las funciones de CRUD desde la consola con identificadores existentes e inexistentes y observar sus resultados.

## Observaciones y limitaciones

- Es una demostración didáctica en el navegador, no un back-end real: no usa Express, rutas HTTP, base de datos ni persistencia.
- La validación no rechaza nombres compuestos solo por espacios.
- El identificador de un producto nuevo se calcula con `productos.length + 1`; después de ciertas eliminaciones puede coincidir con el identificador de otro producto existente.
- El área `pre` no anuncia cambios dinámicos mediante una región viva.
- La información del modelo se reinicia al recargar la página.
