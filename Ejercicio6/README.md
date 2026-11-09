# Ejercicio 6: lista de tareas con jQuery

## ¿Qué hace este programa?

Esta página permite agregar tareas a una lista, eliminarlas y conservarlas en `localStorage` del navegador. La interfaz se manipula con jQuery.

## Cómo funciona

La estructura está en [index.html](./index.html):

- El campo `tarea` recibe el texto de una tarea.
- El botón `agregar` incorpora la tarea a la lista.
- El elemento `mensaje` muestra un aviso cuando el campo está vacío.
- La lista `lista` se completa dinámicamente.
- jQuery 3.7.1 se carga desde el CDN de code.jquery.com antes de [app.js](./app.js).

La lógica de [app.js](./app.js):

1. `cargarTareas()` lee y convierte a JSON las tareas almacenadas bajo la clave `tareasJQ`.
2. `guardarTareas()` guarda el arreglo actualizado en `localStorage`.
3. `renderizar()` reconstruye la lista y muestra cada tarea con un botón para eliminarla. El texto se asigna con `.text()`.
4. El evento del botón valida que el texto no esté vacío, agrega la tarea, guarda los cambios y actualiza la lista.
5. Un controlador delegado en la lista procesa los clics en los botones de eliminación.

## Estilos

En [styles.css](./styles.css) se definen el panel principal, los controles de entrada y los botones para agregar y eliminar.

## Cómo probarlo

1. Abre [index.html](./index.html) en un navegador con conexión a internet para cargar jQuery desde el CDN.
2. Presiona **Agregar** con el campo vacío y comprueba el mensaje.
3. Agrega una tarea y verifica que aparezca en la lista.
4. Recarga la página para comprobar que la tarea persiste.
5. Elimina la tarea y recarga para comprobar que ya no aparece.

Las tareas se guardan en el almacenamiento local de ese navegador y origen; no se envían a un servidor.
