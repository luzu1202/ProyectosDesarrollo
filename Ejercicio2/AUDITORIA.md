# Auditoria - Ejercicio 2

## Alcance

Se revisaron la validacion del formulario, mensajes accesibles, controles de teclado y adaptacion a distintos tamanos de pantalla.

## Hallazgos y correcciones

- Se conservaron las validaciones nativas de nombre, correo, telefono, contrasena y terminos.
- Los campos informan su estado mediante `aria-invalid` y los mensajes se mantienen asociados con `aria-describedby`.
- El checkbox ahora actualiza su mensaje inmediatamente al cambiar, no solo al enviar.
- Se agregaron `autocomplete` e `inputmode` para mejorar la experiencia en dispositivos moviles.
- Se evito marcar todos los campos en rojo antes de que el usuario interactue con ellos.
- El formulario usa ancho fluido y un breakpoint para telefonos pequenos; el boton ocupa todo el ancho cuando es necesario.
- Se agregaron estilos de foco visibles para teclado.

## Verificacion

- Caso invalido: enviar vacio, introducir correo invalido, telefono distinto de 10 digitos o contrasena menor de 8 caracteres.
- Caso valido: completar todos los campos y aceptar terminos; debe mostrarse el mensaje de cuenta creada.
- Responsive: revisar en 320 px, 375 px, 768 px y 1440 px; no debe aparecer desplazamiento horizontal.
- Accesibilidad manual: navegar con teclado y verificar que cada error se anuncia junto a su campo.
