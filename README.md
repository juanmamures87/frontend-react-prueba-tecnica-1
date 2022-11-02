Prueba técnica para puesto de trabajo de desarrollador Frontend en Cleverpy.

Descripción de la prueba.

La prueba consiste en diseñar, implementar y conectar un plataforma con “cards” para la
visualización de posts o comentarios realizados por un usuario. Para ello, utilizaremos como ejemplo
el contenido gratuito ofrecido por jsonplaceholder.typicode.com, y más en concreto, los resultados
ofrecidos por la llamada GET de https://jsonplaceholder.typicode.com/posts.

Funcionalidad.

La funcionalidad final de la solución debe permitir al usuario administrar y visualizar todos los posts
de los usuarios disponibles en la herramienta.
Conceptualmente, hablamos de visualizar un post como que el usuario pueda ver el título del post
(identificado por el atributo title), el usuario que ha creado el post (identificado por el atributo
userId), y el contenido del texto del post (identificado por el atributo body). Dicha visualización debe
ser resumida en una sola pantalla con una agregación de todos los post disponibles.
Dicha visualización debe permitir al usuario eliminar posts. Esta funcionalidad solamente se debe
aplicar a nivel de código cliente sin necesidad de lanzar una petición para borrar el post en backend,
aunque maquetarlo se tendrá en cuenta.

Puntos a valorar:

Diseño

El diseño de la interfaz de la herramienta descrita será valorado positivamente por llevar un análisis
previo a la problemática y adelantarse a posibles escenarios que puedan suceder a nivel de
funcionalidad.

Implementación

Aquí se valorará todo lo relacionado a nivel de código. Esta parte es mucho más compleja de
especificar y por tanto marcaremos ciertos objetivos necesarios y opcionales.
● Objetivos necesarios
  ○ Código totalmente en TypeScript.
  ○ Tipado sin tipos any.
  ○ Código en React
  ○ Uso de componentes funcionales
  ○ Buena identación
  ○ No usar librerías externas que realicen la función descrita en el documento. Sí se
permiten las que sean un medio para conseguir la funcionalidad final. (Una librería
que proporcione un dropdown para el card estaría permitido, una librería que cree el
card al completo no).

● Opcionales
  ○ Testing unitario
  ○ Testing e2e
  ○ Estilos scss y variables css
  ○ BEM
  ○ Flexbox
  ○ Grid-CSS

Conexión

Para esta parte, se debe conectar directamente la plataforma de posts a los resultados de
jsonplaceholder, de manera que se pidan los datos y se muestren dinámicamente en la plataforma.
Para este paso, se valorará la manera de implementarlo. Cualquier muestra de implementación de la
funcionalidad mediante el uso del store de Redux será valorado positivamente (aunque no sea la
mejor solución a priori).

Ampliaciones

Además de la funcionalidad descrita, se propone una serie de ampliaciones por si el entrevistado se
ve interesado en la prueba y quiere extender la funcionalidad de la plataforma:

● Edición de posts
● Layout básico
  ○ Navbar
  ○ Sidebar
  ○ Content
  ○ Breadcrumbs
● Pantalla de login
● Paleta de colores y guía de estilos
● Estilos CSS y animaciones
