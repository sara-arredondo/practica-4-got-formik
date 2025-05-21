## App Game Of Thrones

### Ejercicio

> **Nota**: La idea detras de esta ejercitacion es aplicar control de formularios, practica con useState e implementacion de libreria basada en componentes.

En este caso los componentes no estan creados, los componentes a crear sera Header, Banner, AddCharacter, ContainCard, Card y Footer.

Sabemos que los Componentes de React tiene que cumplir el principio de una sóla responsabilidad, es decir que cada Componente debé cumplir una sóla tarea bien definida. Los Componentes que vamos a codear son:

### Siguiendo la linea de las ejercitaciones anteriores, la estructura general es muy parecida

#### A modo de ayuda y guia

- Los personajes de GOT, ya se encuentran en un estado colocado en el archivo App.jsx
- Implementar localStorage
- La estructura visual de arriba hacia abajo deberia ser: el header, el formulario, los personajes y al final el footer. (El Banner pueden colocarlo o no, donde ustedes quieran)
- El formulario para agregar personajes debe estar controlado manualmente o con una libreria. Los campos para el formulario:
  1. fullName
  2. title
  3. family
  4. imageUrl (Opcional)
- Al agregar un nuevo personaje deberia guardarse en localStorage y en el estado junto con los demas ya establecidos
- Al agregar el personaje deberia verse reflejado automaticamente en la lista de personajes. (Para el renderizado de estos en la propiedad key utilizar el `index` del array en vez del `id`)
- Se debe trabajar con una libreria basada en componentes

### Instrucciones para correr el proyecto

#### `npm install`

Instala todas las dependecias necesarias para correr el proyecto correctamente a la altura del package.json

#### `npm run dev`

Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a
http://127.0.0.1:5173/

> No es necesario volver a correr el proyecto cada vez que se realice un cambio sino que se verá automáticamente reflejando en el navegador. Si se detecta que no se aplica un cambio automaticamente, es recomendable en ese caso actualizar el navegador
