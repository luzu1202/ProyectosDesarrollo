# Auditoria - Ejercicio 3

## Alcance

Se revisaron la estructura semantica, accesibilidad, estilos responsive, contraste en modo oscuro y comportamiento en distintos tamanos de pantalla de la galeria de servicios.

## Hallazgos y correcciones

- La galeria ahora usa una seccion semantica con etiqueta accesible.
- Los emojis decorativos se ocultan a lectores de pantalla mediante `aria-hidden`.
- El ano del pie de pagina se actualiza automaticamente para evitar que quede desactualizado.
- El layout usa un enfoque mobile-first: una columna en telefonos, dos en tablets y tres en pantallas amplias.
- Se añadieron `minmax(0, 1fr)` y ancho fluido para evitar desbordamientos en tarjetas.
- El contenido ocupa la altura disponible y mantiene el pie de pagina al final en pantallas altas.
- El modo oscuro conserva fondos diferenciados para tarjetas, encabezado y pie de pagina.

## Verificacion

- HTML estatico revisado: etiquetas semanticas, idioma y viewport presentes.
- JavaScript inline verificado: el ano se muestra automaticamente.
- Responsive revisado en 320 px, 375 px, 600 px, 768 px, 900 px y 1440 px.
- Accesibilidad manual: comprobar lectura de titulos y descripciones sin anunciar los emojis decorativos.
- No debe aparecer desplazamiento horizontal en ninguna de las medidas revisadas.
