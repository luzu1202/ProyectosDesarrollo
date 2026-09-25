# Ejercicio 4: simulador de servicio asíncrono

## ¿Qué hace este programa?

Este ejercicio simula la consulta de datos de un usuario a un servicio externo. Al presionar el botón, la aplicación muestra un estado de carga y, después de un tiempo, puede responder con éxito o con un error aleatorio.

El resultado exitoso muestra el nombre y el rol del usuario:

```text
Bienvenido, Andres (estudiante)
```

En caso de fallo, se muestra un mensaje indicando que no fue posible conectarse con el servicio.

## Cómo funciona

La estructura de la interfaz está en [index.html](./index.html):

- `btnCargar` es el botón que inicia la consulta.
- `resultado` es el párrafo donde se muestran los estados de la operación.
- `aria-live="polite"` permite que los cambios sean anunciados por lectores de pantalla.

La lógica está en [script.js](./script.js):

1. `ServicioError` define un error específico para fallos del servicio.
2. `obtenerDatosUsuario()` devuelve una `Promise`.
3. `setTimeout` simula una espera de 800 milisegundos.
4. `Math.random()` determina si la consulta termina correctamente o falla.
5. El evento `click` usa una función `async`.
6. `await` espera el resultado de la Promise.
7. `try...catch` muestra el resultado correcto o el mensaje de error.
8. `finally` registra que el intento terminó, sin importar el resultado.

## ¿Cómo se hizo?

### HTML

Se construyó una interfaz pequeña con HTML semántico, un título, un botón y un área de resultados. El atributo `type="button"` evita comportamientos inesperados si la interfaz se integra posteriormente dentro de un formulario.

### CSS

En [styles.css](./styles.css) se definió un diseño sencillo y centrado:

- fondo claro
- tarjeta blanca para el contenido
- botón azul con estado `hover`
- texto de resultado separado visualmente
- altura mínima para evitar saltos de diseño al actualizar el mensaje

### JavaScript

La consulta simulada se implementó con una Promise para practicar operaciones asíncronas. El programa no bloquea la interfaz mientras espera y actualiza el texto en cada estado:

- estado inicial: “Presiona el botón para empezar.”
- estado de carga: “Cargando...”
- estado exitoso: bienvenida con los datos del usuario
- estado de error: mensaje del servicio

## Cómo probarlo

1. Abre [index.html](./index.html) en un navegador.
2. Presiona **Cargar datos del usuario**.
3. Comprueba que aparece el estado de carga.
4. Repite la operación varias veces para observar tanto el resultado exitoso como el error simulado.

No necesita dependencias externas ni un servidor para ejecutarse.
