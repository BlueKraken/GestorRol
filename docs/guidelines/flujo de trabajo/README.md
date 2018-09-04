# Guías y comentario sobre el flujo de trabajo

## Contenidos
WIP

## Trabajando con git
[Sitio oficial](https://git-scm.com) | 
[Descarga](https://git-scm.com/download/win) |
[Introducción por GitHub](https://guides.github.com/introduction/flow/)

### Resumen
Git es una mesa de trabajo que proporciona herramientas para controlar las versiones y el flujo de trabajo de un repositorio. LLamamos repositorio a un contenedor de archivos que una organización mantiene y actualiza para entregarle valor a este.

Un repositorio git es definido por un directorio que contiene una carpeta escondida llamada `.git`. Esta carpeta es creada al llamar al comando `git init`.

### Herramientas gráficas

#### Gitk
Herramienta invocable desde la línea de comandos si se encuentra en un directorio con un repositorio git. Viene incluida en la instalación de git

    gitk --all

Es perfecta mara visualizar cambios y explorar las versiones realizadas. Contiene exactamente lo que un usuario convencional necesita

#### GitKraken
Herramienta "*full featured*" de manejo de repositorios. Es muy poderosa, pero si no se tiene la expertise, es mejor usarla sólo para visualizar y arreglar detalles, y utilizar las herramientas de VSCode para crear ramas y realizar commits.

[Descarga GitKraken](https://www.gitkraken.com/download)

### Conceptos
A continuación se introducen los conceptos principales de Git, es esperable que de primera no se entienda exactamente a lo que se refiere cada concepto, ni como se ve. Pero utilizando las herramientas de visualización, además de VSCode para crear ramas y realizar commits (que equivale al 90% de lo que se hace en git) se hace mucho más facil familiarizarse con la herramienta.

#### Commits (Hechos)
> Es difícil traducir el concepto commit al español en este contexto, ya que literalmente significa 'cometer', pero hace referencia a cometer un hecho, o un cambio. Por esto hablaremos de commits.

Un commit es un hecho dentro de una rama, contiene la descripción de la **diferencia** de la rama antes y después de este commit. Esto deja en claro cuáles son los archivos que se modificaron, y cómo (que líneas de código se agregaron y eliminaron)

Cada commit debe ir acompañado de un mensaje que contenga la descripción de los cambios hechos, en general se utiliza para persistir el "flujo de pensamiento" en el flujo de trabajo, así no olvidamos qué hicimos y porqué

##### Stage Changes (Preparar cambios)
Para realizar un commit, se requiere agregar los cambios al futuro commit. Para esto se utiliza el comando `git add <nombre de archivo>`, pero se puede realizar desde la herramienta gráfica de VSCode que se explicará más adelante

#### Branches (Ramas)
Una rama es una línea de tiempo dentro de la historia del proyecto. En general se usan ramas para determinar flujos de trabajos específicos. Cada repositorio es inicializado con una rama llamada `master` y un commit llamado `initial commit`, que contiene la inicialización del repositorio.

En general se usa master para publicar cambios en producción, por lo que se agregan ramas con nombres como 'Dev', 'New-feature', 'user-authentication', 'testing', etc. Para mantener el trabajo organizado 

#### Checkout
Podemos cambiar la rama en la que nos encontramos trabajando cuando lo estimemos conveniente, por lo que podemos iniciar el desarrollo de una característica antes de terminar otra que se encuentre en proceso. Esto se logra utilizando el comando `git checkout`, con el cual podemos definir que la rama a la que *saldremos* es una nueva.

Es importante controlar desde que rama vamos a ramificar un nuevo flujo de trabajo, por ejemplo: Si nos encontramos en la rama de la implementación de un componente y queremos trabajar en una nueva característica, es recomendable ramificar desde la rama principal de desarrollo, así, sin importar que característica terminemos primero, podemo realizar un *merge* a la rama principal de desarrollo sin problemas.

#### Merge
Cuando una rama termina con su objetivo (ej: el bug en el cual se trabajaba en la rama es corregido), se puede unir (*merge*) con otra rama, en general su rama base. Git se preocupa de que se apliquen los cambios en la rama base, y si hay problemas de unión, hay herramientas para selecionar que cambios realizar en las partes con conflictos

### Local & Remote
Los repositorios creados en una máquina, a travez de la terminal u cualquier otra herramienta, son repositorios locales. Estos repositorios pueden asociarse a un repositorio accesible desde internet (Como un repositorio en GitHub) denominado repositorio remoto.

Para trabajar en un equipo, el repositorio remoto pasa a ser "la fuente de la verdad" del sistema en desarrollo, por lo que se le llama **origen**. 

Los miembros del equipo pueden ocupar distintos comandos para interactuar con este repositorio. Pero se recomienda utilizar las herramientas de VSCode

En pocas palabras, la idea es que un miembro del equipo, inicialmente, *clona* el repositorio remoto a su máquina de trabajo, y cuando tiene cambios que reportar, realiza un `push request` hacia el origen, que debe ser revisado por el administrador y aprobado en caso de no poseer problemas.

Si hubieron cambios en el origen realizados por otro miembro, podemos pedir esos cambios realizando un `pull`

Para sincronizar el repositorio local con su origen se deben utilizar varios comandos en escalera, pero con VSCode se puede presionar el ícono "refrescar" al lado del nombre de la rama actual, en el costado inferior izquierdo de la ventana de VSCode. Esta herramienta pedirá los cambios del origen, realizará un `merge`, y publicará los cambios al origen.


### Git + VSCode
[Documentación oficial](https://code.visualstudio.com/docs/editor/versioncontrol)

[Video rápido de uso básico (6:18)](https://www.youtube.com/watch?v=VOwyH2-VCVY)

La pestaña de versión de control se puede acceder presionando el ícono del menú lateral que representa una ramificación, o presionando `Ctrl` + `Shift` + `G`.

Todas las herramientas que ofrece esta pestaña pueden ser accedidos desde la paleta de comandos escribiendo
    >git:

#### Inicializar un repositorio
Abrir la paleta de comandos (`Ctrl` + `Shift` + `T`) y buscar el comando **Initialize repository**.

Al costado inferior izquierdo se puede ver la rama actual de trabajo y si tiene cambios pendientes su nombre aparecerá acompañado de un asterisco.

#### Checkout branch
Si presionamos el nombre de la rama podemos realizar un `checkout` a una rama existente, o crear una nueva.

#### Stage changes
Para agregar los cambios de un archivo a un futuro commit, se puede seleccionar el ícono **+** que aparece al sobreponer el mouse sobre un archivo, o aplicar el comando `git stage changes`, con lo que se agregarán los cambios del archivo abierto.

#### Commit
Para realizar un commit, se puede presionar el ticket sobre la pestaña de versión de control, o presionando `Ctrl` + `Enter`. El último caso funcionará sí y sólo sí ya se ha escrito un mensaje para el commit. 

La primera línea del mensaje será el título o nombre del commit. Las siguientes líneas corresponderán a la descripción del commit.

* Si no hay ningún cambio agregado, se preguntará si se quieren agregar todos los cambios al commit.
* Si no hay mensaje escrito para el commit, se pedirá que lo escriba.

El mensaje del commit se puede ir escribiendo a travez del tiempo para no perder el hilo de pensamiento de los cambios realizados. Aún así, se pueden observar los cambios hechos en cada archivo al presionarlo.

##### Formateo de mensajes de commits
TODO: Definir estilo de mensajes de commit

#### Otros
Al costado del editor, donde se muestran los números de las líneas de texto, se muestran los cambios del archivo utilizando colores: Azul representa líneas agregadas y rojo, eliminadas. Se puede presionar la sección coloreada para revisar los cambios

## VSCode
Charla muy buena respecto al uso de VSCode, dura 1 hora si, pero lo vale xd.
[VS Code Can Do That?!](https://www.youtube.com/watch?v=x5GzCohd4eo)

Se puede abrir una carpeta o archivo con VSCode desde cualquier parte utilizando PowerShell o cmd
    code <ruta>
* Si la ruta apunta a un archivo:
    * Si VSCode está abierto, el archivo se abrirá éste en la primera instancia de VSCode que PowerShell encuentre, en su defecto abre VSCode. 
    * Si el archivo no existe, crea un archivo en memoria y lo abre con VSCode (útil para crear archivos en directorios específicos para trabajar inmediatamente en ellos)
* Si es una carpeta, abre una nueva instancia de VSCode con la carpeta especificada

Ejemplos:
    code .
    code ./miProyecto
    code ./webApp/componentes/miComponente.html

Aprovechando la terminal integrada de VSCode, podemos complementar el flujo de trabajo utilizando comandos de la línea de comandos de PowerShell, como:
* `cd`
* `mkdir`
* `new-item`
* `cls`

### Shortcuts

Documento oficial con todos los comandos de VSCode:
[Keyboard shortcuts for windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

#### Paleta de comandos
`Ctrl` + `Shift` + `P`.

VSCode presenta la paleta de comandos completa al utilizar este atajo, esto es muy útil para navegar por comandos cuyo atajo olvidamos, o comandos que no poseen atajo.

#### Ir a archivo
`Ctrl` + `P`

Se puede mantener presionado `Ctrl` y presionar reiteradamente `P` para mover el cursor, cuando se suelta `Ctrl` el archivo con el cursor sobre él es abierto.
Se pueden ingresar carácteres en el buscador para invocar otras funcionalidades:

* `>` Invoca la paleta de comandos
* `:` Invoca el comando "Ir a línea"
* `?` Invoca la paleta de comandos de ayuda 

#### Otros

| Atajo | Nombre | Descripción |
| --- | --- | --- |
|`Ctrl` + `Ç` | Toggle comments | Comenta o descomenta la(s) líena(s) de la selección
| `F2` | Rename | Renombra un símbolo (variable, clase, función, etc) en todos los archivos en los que se encuentren presente |
| `F12` | Go to definition | Salta hacia el archivo donde está definido el símbolo seleccionado |
| `Ctrl` + `F12` | See definition | Muestra la definición del símbolo sin cambiar de archivo |
| `Ctrl` + `G` | Go to line | Salta a la línea que especifica el usuario |
| `Ctrl` + `F` | Search | Busca la cadena seleccionada |
| `Ctrl` + `H` | Replace | Reemplaza una cadena por otra |
| `F3` | See next | Ir a siguiente concordancia (en búsqueda y reemplazo) |
| `Ctrl` + `Alt` + `Enter` | Replace all | Reemplaza todas las concordancias con la cadena especificada |
| `Ctrl` + `Ñ` | Open terminal | Abrir o cerrar la terminal |
| `Ctrl` + `,` | User options | Mostrar opciones de usuario |
| [`Ctrl` + `K`] + `S` | Save all | Guardar todo |

#### Comandos *a la Google Chrome*
Adicionalmente, VSCode integra comandos de manejo de pestañas de Google Chrome y otros navegadores, siendo en este caso en vez de pestañas, archivos. Como por ejemplo:

* `Ctrl` + `Tab` 
* `Ctrl` + `Shift` + `Tab` 
* `Ctrl` + `W`
* `Ctrl` + `Shift`  + `T` 

##### Otros
Si se corta sin una selección (`Ctrl` + `X`), la línea entera será cortada. Esto es verdadero también para el comando copiar (`Ctrl` + `C`)

Se puede subir o bajar una línea, o una selección, manteniendo presionado `Alt` y la flecha hacia attiba o abajo.

Se pueden editar varias líneas al mismo tiempo
* Manteniendo presionado `Ctrl` + `Alt` y presionando flecha hacia arriba o hacia abajo, agrega un cursor en esa posición.
* Manteniendo presionado `Alt` se puede agregar un cursor en cualquier parte haciendo click izquierdo con el mouse.
* Para salir de este modo, se debe presionar `Esc`