# Ejercicio 5: lista de tareas

## ¿Qué hace este programa?

Este ejercicio es una lista de tareas sencilla. Permite escribir una tarea, agregarla a la lista y eliminarla cuando ya no se necesita. Las tareas se guardan en `localStorage`, así que se mantienen en el navegador al recargar la página.

## Cómo funciona

La interfaz está en [index.html](./index.html):

- El campo `tarea` recibe el texto nuevo.
- El botón `agregar` añade la tarea.
- El elemento `tarea-error` muestra un mensaje si se intenta agregar un texto vacío.
- La lista `lista` muestra las tareas y sus botones para eliminarlas.

La lógica está en [script.js](./script.js):

1. `cargarTareas()` recupera del almacenamiento local las tareas guardadas.
2. `guardarTareas()` serializa el arreglo con `JSON.stringify` y lo guarda bajo la clave `tareas`.
3. `renderizar()` reconstruye la lista en la página y crea un botón de eliminación para cada tarea.
4. Al agregar, se eliminan espacios sobrantes con `trim()`. Si el texto está vacío, se muestra un error; si no, se añade al arreglo, se guarda y se actualiza la vista.
5. La lista escucha los clics en los botones de eliminar, obtiene el índice correspondiente, quita esa tarea del arreglo, guarda los cambios y vuelve a renderizar.

## ¿Cómo se hizo?

### HTML

Se creó una página con un campo de texto, un botón para agregar, un área para el mensaje de error y una lista vacía que JavaScript completa dinámicamente. `aria-describedby` conecta el campo con el mensaje de error, y `aria-live="polite"` permite anunciar sus cambios.

### CSS

En [styles.css](./styles.css) se aplicó un diseño centrado y compacto, con un panel blanco, controles con bordes redondeados y botones diferenciados para agregar y eliminar tareas.

### JavaScript

El estado de la lista se mantiene en un arreglo y se sincroniza con `localStorage`. La función `renderizar()` crea elementos DOM para cada tarea y asigna el texto usando `textContent`.

## Cómo probarlo

1. Abre [index.html](./index.html) en el navegador.
2. Intenta agregar una tarea vacía para ver la validación.
3. Escribe una tarea y presiona **Agregar tarea**.
4. Elimínala con el botón correspondiente.
5. Agrega otra tarea y recarga la página: la tarea debe seguir guardada.

Las tareas se almacenan localmente en el navegador en el que se usa la página; no se envían a un servidor.
