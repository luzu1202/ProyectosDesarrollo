# Ejercicio 2: formulario de registro accesible

## ¿Qué hace este programa?

Este ejercicio crea un formulario de registro para una cuenta de usuario. Tiene campos para:

- nombre completo
- correo electrónico
- teléfono
- contraseña
- aceptación de términos y condiciones

Cuando el usuario intenta enviar el formulario, se validan los datos para verificar que estén completos y con formato correcto. Si hay errores, aparecen mensajes claros junto a cada campo.

## Cómo funciona

La estructura del formulario está en [index.html](./index.html):

- cada campo tiene su `label` asociado con `for`
- cada input usa `aria-describedby` para enlazar el mensaje de error
- el checkbox de términos tiene su propio mensaje de error
- el formulario incluye un parrafo `mensajeExito` para mostrar un aviso cuando todo esté correcto

La validación principal está en [app.js](./app.js):

- `validarCampo(input, mensajeError)` revisa si el campo cumple la validación HTML nativa
- si no cumple, se muestra el mensaje de error
- se actualiza el atributo `aria-invalid` para indicar el estado del campo
- al enviar el formulario, se revisan todos los campos antes de aceptar la cuenta

## ¿Cómo se hizo?

### HTML
Se usa HTML5 con tipos de entrada como:

- `text`
- `email`
- `tel`
- `password`

También se añaden atributos como:

- `required`
- `minlength`
- `autocomplete`
- `inputmode`
- `aria-describedby`

Esto ayuda tanto a la validación como a la accesibilidad y a la usabilidad en dispositivos móviles.

### CSS
En [styles.css](./styles.css) se diseñó un formulario limpio y legible con:

- fondo claro
- panel central para el formulario
- bordes resaltados para campos válidos e inválidos
- estilos de focus para teclado
- diseño adaptable para pantallas pequeñas

Se agrega un ajuste especial para móviles: cuando la pantalla es muy estrecha, el botón de envío ocupa todo el ancho.

### JavaScript
La lógica de validación se realiza con JavaScript para controlar mensajes, estado visual y accesibilidad.

Se hace lo siguiente:

- al salir del campo (`blur`), se valida individualmente
- al cambiar el checkbox de términos, se revisa si fue aceptado
- al enviar el formulario, se valida todo de nuevo y se muestra un mensaje de éxito solo si todo está bien

Esto permite que el usuario reciba retroalimentación inmediata y clara.

## Objetivo del ejercicio

Este programa enseña a crear formularios confiables, con validación de datos y accesibilidad. No solo sirve para guardar información, sino para asegurar que el usuario entienda qué falta o qué está mal antes de enviar el formulario.
