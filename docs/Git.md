#Trabajando con git
[Sitio oficial](https://git-scm.com)

[Descarga](https://git-scm.com/download/win)

[Introducción por GitHub](https://guides.github.com/introduction/flow/)

##Resumen
Git es una mesa de trabajo que proporciona herramientas para controlar las versiones y el flujo de trabajo de un repositorio. LLamamos repositorio a un contenedor de archivos que una organización mantiene y actualiza para entregarle valor a este.

Un repositorio git es definido por un directorio que contiene una carpeta escondida llamada `.git`. Esta carpeta es creada al llamar al comando `git init`.

###Herramientas gráficas

###Gitk
Herramienta invocable desde la línea de comandos si se encuentra en un directorio con un repositorio git.

    gitk --all

Es perfecta mara visualizar cambios y explorar las versiones realizadas. Contiene exactamente lo que un usuario convencional necesita

###GitKraken
Herramienta "*full featured*" de manejo de repositorios. Es muy poderosa, pero si no se tiene la expertise, es mejor usarla sólo para visualizar y arreglar detalles, y utilizar las herramientas de VSCode para crear ramas y realizar commits.

[Descarga GitKraken](https://www.gitkraken.com/download)

##Conceptos
A continuación se introducen los conceptos principales de Git, es esperable que de primera no se entienda exactamente a lo que se refiere cada concepto, ni como se ve. Pero utilizando las herramientas de visualización, además de VSCode para crear ramas y realizar commits (que equivale al 90% de lo que se hace en git) se hace mucho más facil familiarizarse con la herramienta.



###Commits (Hechos)
> Es difícil traducir el concepto commit al español en este contexto, ya que literalmente significa 'cometer', pero hace referencia a cometer un hecho, o un cambio. Por esto hablaremos de commits.

Un commit es un hecho dentro de una rama, contiene la descripción de la **diferencia** de la rama antes y después de este commit. Esto deja en claro cuáles son los archivos que se modificaron, y cómo (que líneas de código se agregaron y eliminaron)

Cada commit debe ir acompañado de un mensaje que contenga la descripción de los cambios hechos, en general se utiliza para persistir el "flujo de pensamiento" en el flujo de trabajo, así no olvidamos qué hicimos y porqué

####Stage Changes
Para realizar un commit, se requiere agregar los cambios al futuro commit. Para esto se utiliza el comando `git add <nombre de archivo>`, pero se puede realizar desde la herramienta gráfica de VSCode que se explicará más adelante

###Branches (Ramas)
Una rama es una línea de tiempo dentro de la historia del proyecto. En general se usan ramas para determinar flujos de trabajos específicos. Cada repositorio es inicializado con una rama llamada `master` y un commit llamado `initial commit`, que contiene la inicialización del repositorio.

En general se usa master para publicar cambios en producción, por lo que se agregan ramas con nombres como 'Dev', 'New-feature', 'user-authentication', 'testing', etc. Para mantener el trabajo organizado 

###Checkout
Podemos cambiar la rama en la que nos encontramos trabajando cuando lo estimemos conveniente, por lo que podemos iniciar el desarrollo de una característica antes de terminar otra que se encuentre en proceso. Esto se logra utilizando el comando `git checkout` con el cual podemos definir que la rama a la que *saldremos* es una nueva. Es importante controlar desde que rama vamos a ramificar un nuevo flujo de trabajo, por ejemplo: Si nos encontramos en la rama de la implementación de un componente y queremos trabajar en una nueva característica, es recomendable ramificar desde la rama principal de desarrollo, así, sin importar que característica terminemos primero, podemo realizar un *merge* a la rama principal de desarrollo sin problemas.

####Merge
Cuando una rama termina con su objetivo (ej: el bug en el cual se trabajaba en una rama es corregido), se puede unir (*merge*) con otra rama, en general su rama base. Git se preocupa de que se apliquen los cambios en la rama base, y si hay problemas de unión, hay herramientas para selecionar que cambios realizar en las partes con conflictos

###Guía de git con VSCODE
[Documentación oficial](https://code.visualstudio.com/docs/editor/versioncontrol)

La pestaña de versión de control se puede acceder presionando el ícono del menú lateral que representa una ramificación, o presionando `Ctrl` + `Shift` + `G`.

Todas las herramientas que ofrece esta pestaña pueden ser accedidos desde la paleta de comandos escribiendo
    >git:

Para inicializar el repositorio en el directorio de trabajo sólo basta con abrir la paleta de comandos (`Ctrl` + `Shift` + `T`) y buscar el comando **Initialize repository**.

Al costado inferior izquierdo se puede ver la rama actual de trabajo y si tiene cambios pendientes su nombre aparecerá acompañado de un asterisco.

Si presionamos el nombre de la rama podemos realizar un `checkout` a una rama existente, o crear una nueva.

Para agregar los cambios de un archivo a un futuro commit, se puede seleccionar el ícono **+** que aparece al sobreponer el mouse sobre un archivo, o aplicar el comando `git stage changes`, con lo que se agregarán los cambios del archivo abierto.

Para realizar un commit, se puede presionar el ticket sobre la pestaña de versión de control, o presionando `Ctrl` + `Enter`. El último caso funcionará sí y sólo sí ya se ha escrito un mensaje para el commit. 

* Si no hay ningún cambio agregado, se preguntará si se quieren agregar todos los cambios al commit.
* Si no hay mensaje escrito para el commit, se pedirá que lo escriba.

El mensaje del commit se puede ir escribiendo a travez del tiempo para no perder el hilo de pensamiento de los cambios realizados. Aún así, se pueden observar los cambios hechos en cada archivo al presionarlo.

###Formateo de mensajes de commits
[Sintaxis](https://confluence.atlassian.com/bitbucketserver/markdown-syntax-guide-776639995.html)

[Preview](http://markdownlivepreview.com/)