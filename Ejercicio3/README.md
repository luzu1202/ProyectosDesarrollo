# Ejercicio 3: galería de servicios

## ¿Qué hace este programa?

Este ejercicio muestra una galería de servicios para una empresa o negocio. Presenta varios servicios en tarjetas con iconos, títulos y una breve descripción.

Los servicios incluidos son:

- Desarrollo Web
- Diseño UI/UX
- Seguridad

La idea es mostrar una página visualmente ordenada, moderna y adaptable a distintos tamaños de pantalla.

## Cómo funciona

La estructura principal está en [index.html](./index.html):

- `header` con el nombre de la sección
- `main` que contiene la galería
- `section class="galeria"` con varias `article` dentro
- cada `article` representa una tarjeta de servicio
- `footer` con el año actual generado por JavaScript

El comportamiento dinámico se hace directamente en el mismo archivo HTML con script inline:

```html
<script>
  document.getElementById("anio").textContent = new Date().getFullYear();
</script>
```

Eso permite que el año del pie de página siempre esté actualizado sin necesidad de modificar el HTML manualmente.

## ¿Cómo se hizo?

### HTML
Se estructuró una galería con contenido semántico y limpio:

- `header` para el título principal
- `section` para contener los servicios
- `article` para cada tarjeta
- `footer` para la información final

También se usan iconos emoji como decoración visual, y se ocultan para lectores de pantalla con `aria-hidden` en la versión final mejorada.

### CSS
En [styles.css](./styles.css) se definió:

- un diseño centrado y limpio
- una galería en una sola columna en móviles
- dos columnas en tablets
- tres columnas en pantallas más amplias

Se usa `grid` para organizar las tarjetas y `minmax(0, 1fr)` para evitar desbordamientos. También se agrega un modo oscuro con `@media (prefers-color-scheme: dark)` para mejorar la experiencia visual.

### Responsive design
La galería se adapta de forma progresiva:

- móvil: una tarjeta por fila
- tablet: dos tarjetas por fila
- desktop: tres tarjetas por fila

Esto permite mantener una buena lectura y una apariencia equilibrada en distintos dispositivos.

## Objetivo del ejercicio

Este ejercicio enseña a crear una interfaz comercial atractiva con maquetación responsive, uso de CSS Grid y buenas prácticas de accesibilidad y diseño visual.

Es una práctica muy útil para páginas de servicios, portafolios, landing pages y sitios corporativos.
