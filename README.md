# Recuperatorio Front End 3

Para esta instancia, quisiéramos que puedas realizar algunas tareas para mejorar este pequeño ejemplo.

## Punto 1

El componente `App` en este momento está construido a través de clases. Tu tarea será transformarlo en un componente funcional.

## Punto 2

Al haber transformado el componente `App`, deberás mantener la posibilidad de utilizar estados. Necesitamos que puedas crear un estado llamado `filtro` con un valor inicial `"Todos"` para este componente ahora funcional.

## Punto 3

La funcionalidad principal de esta aplicación es filtrar los diferentes tamaños de perritos. Eso quiere decir que deberás otorgarle esa facultad al componente `Botonera`. Para eso, necesitaras que el estado filtro y su función para actualizar, creados en el componente `App`, sean conocidos por el componente `Botonera` para poder modificarlos con la siguiente lógica:

- Al hacer clic en el botón "PEQUEÑOS", se debería actualizar el estado `filtro` con el valor `"Pequeño"`.
- Al hacer clic en el botón "MEDIANOS", se debería actualizar el estado `filtro` con el valor `"Mediano"`.
- Al hacer clic en el botón "GRANDES", se debería actualizar el estado `filtro` con el valor `"Grande"`.
- Al hacer clic en el botón "TODOS", se debería actualizar el estado `filtro` con el valor `"Todos"`.

## Punto 4

Por último, queremos que cuando se haya montado el componente `App` se imprima el siguiente mensaje por consola: `"El componente se ha montado"`. Necesitarás utilizar métodos del ciclo de vida pero esta vez en componentes funcionales.
