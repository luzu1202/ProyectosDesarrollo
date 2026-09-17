# Auditoria - Ejercicio 1

## Alcance

Se revisaron la estructura HTML, accesibilidad, JavaScript, estilos y comportamiento responsive de la tarjeta de presentacion.

## Hallazgos y correcciones

- Se cerro correctamente la seccion de contacto y se elimino el `id` duplicado del pie de pagina.
- Se corrigio el enlace `mailto`, eliminando el espacio que impedia abrirlo correctamente.
- Se reemplazo la referencia a `foto.jpg` (archivo inexistente) por un avatar accesible generado con CSS.
- El boton de habilidades ahora comunica su estado con `aria-expanded`, `aria-controls` y un texto contextual.
- La navegacion permite envolver sus enlaces en pantallas estrechas y se agregaron estilos de foco visibles.
- Se agrego un breakpoint para telefonos pequenos sin afectar el diseno de escritorio.

## Verificacion

- HTML estatico revisado: etiquetas anidadas y enlaces corregidos.
- JavaScript revisado: fecha del pie de pagina y mostrar/ocultar habilidades funcionan sin dependencias externas.
- Responsive: revisar en 320 px, 375 px, 768 px y 1440 px; no debe aparecer desplazamiento horizontal.
- Accesibilidad manual: navegar con teclado y comprobar que el boton y los enlaces tienen foco visible.
