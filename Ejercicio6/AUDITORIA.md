# Auditoría - Ejercicio 6

## Alcance

Se revisaron la estructura HTML, la carga de jQuery, la validación del texto, el renderizado de tareas, las operaciones de agregar y eliminar, y la persistencia en `localStorage`.

## Elementos verificados por revisión de código

- El documento declara español y un viewport adaptable.
- jQuery se carga antes de `app.js`.
- Los espacios al inicio y al final se eliminan antes de guardar una tarea.
- Las entradas vacías se rechazan y se muestra un mensaje.
- Las tareas se serializan en `localStorage` bajo la clave `tareasJQ`.
- El renderizado crea los elementos de la lista y usa `.text()` para mostrar el contenido de cada tarea.
- La lista usa delegación de eventos para los botones de eliminación.
- Al eliminar una tarea, se actualiza el almacenamiento y se vuelve a renderizar la lista.

## Pruebas funcionales sugeridas

1. Abrir `index.html` con conexión a internet y comprobar que la consola no muestre errores de carga de jQuery.
2. Presionar **Agregar** con el campo vacío y revisar el mensaje.
3. Agregar texto con espacios alrededor y comprobar que se muestra sin esos espacios.
4. Agregar varias tareas, eliminar una y comprobar que las demás se mantienen.
5. Recargar la página para comprobar la persistencia de las tareas.
6. Probar una cadena con caracteres HTML y confirmar que se muestra como texto, no como marcado.

## Observaciones y limitaciones

- El campo de texto solo usa un `placeholder` y no tiene un `label` asociado, lo que puede dificultar su identificación con tecnologías de asistencia.
- Si el contenido guardado en `localStorage` no es JSON válido, `JSON.parse` interrumpe la inicialización de la aplicación.
- jQuery depende de un CDN externo; sin conexión o si el recurso no carga, las interacciones no funcionan.
- Los datos son locales al navegador y al origen; no hay sincronización ni almacenamiento en un servidor.
