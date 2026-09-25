# Auditoría - Ejercicio 4

## Alcance

Se revisaron la estructura HTML, la accesibilidad, la simulación de la operación asíncrona, el manejo de errores y la adaptación visual del ejercicio.

## Elementos verificados

- El documento declara el idioma español y el viewport responsive.
- El botón tiene `type="button"` y un identificador único.
- El área de resultado utiliza `aria-live="polite"`.
- La operación asíncrona devuelve una `Promise`.
- La espera simulada se realiza mediante `setTimeout`.
- El éxito y el fallo se manejan con `resolve` y `reject`.
- La función `async` utiliza `await` dentro de un bloque `try...catch`.
- El mensaje se actualiza en los estados inicial, carga, éxito y error.
- La clase `ServicioError` conserva un tipo de error específico.
- El bloque `finally` se ejecuta después de cada intento.
- El diseño evita desbordamientos en pantallas pequeñas.

## Pruebas funcionales

1. Abrir `index.html` en un navegador.
2. Presionar el botón y comprobar que aparece “Cargando...”.
3. Verificar que una respuesta exitosa muestra el usuario y su rol.
4. Repetir la prueba hasta comprobar el mensaje de error.
5. Revisar la consola para confirmar que se registra el final de cada intento.
6. Navegar hasta el botón usando el teclado.
7. Revisar la página en una pantalla de escritorio y en un teléfono.

## Resultado esperado

El ejercicio debe simular una consulta sin bloquear la interfaz, informar al usuario del estado actual y manejar correctamente tanto las respuestas exitosas como los errores.
