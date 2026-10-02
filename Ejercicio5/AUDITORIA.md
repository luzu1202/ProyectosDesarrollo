# Auditoría - Ejercicio 5

## Alcance

Se revisaron la estructura de la interfaz, la validación de tareas vacías, las operaciones para agregar y eliminar tareas, el renderizado dinámico y la persistencia en `localStorage`.

## Elementos verificados

- El documento declara el idioma español y el viewport responsive.
- El campo de entrada está conectado al mensaje de error mediante `aria-describedby`.
- El mensaje de error utiliza `aria-live="polite"`.
- Los textos vacíos o formados solo por espacios se rechazan.
- Las tareas se agregan al arreglo y se guardan en `localStorage`.
- La función de renderizado muestra el texto mediante `textContent`.
- Cada tarea dispone de un botón para eliminarla.
- Al eliminar una tarea, se guarda el arreglo actualizado y se vuelve a renderizar la lista.
- Las tareas guardadas se cargan al iniciar la página.
- El diseño organiza los controles y la lista dentro de un panel centrado.

## Pruebas funcionales

1. Abrir `index.html` en un navegador.
2. Presionar **Agregar tarea** con el campo vacío y comprobar el mensaje de error.
3. Introducir una tarea y comprobar que aparece en la lista.
4. Recargar la página y comprobar que la tarea continúa visible.
5. Eliminar una tarea y comprobar que desaparece.
6. Recargar la página y verificar que la tarea eliminada no vuelve a aparecer.
7. Probar el uso de la página en una pantalla estrecha.

## Resultado esperado

La aplicación debe permitir agregar y eliminar tareas, impedir entradas vacías y conservar la lista entre recargas del mismo navegador mediante `localStorage`.

## Consideración

El almacenamiento es local al navegador y al origen de la página. No sincroniza las tareas entre dispositivos ni las guarda en un servidor.
