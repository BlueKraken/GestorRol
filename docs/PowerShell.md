##Comandos de PowerShell
Es útil conocer comandos de powershell que ayudan al flujo de trabajo

####Moverse por el árbol de directorios:
    cd <ruta>

Ejemplos:

    cd ../../miCarpeta
    cd ./unDirectorio
* '`.`' define el directorio en el que nos encontramos
* '`..`' define un salto hacia arriba del directorio en el que nos encontramos

####Crear un directorio
    mkdir <nombre del directorio>
> Se puede agregar un prefijo al nombre del directorio para no tener que navegar a la ruta deseada

Ejemplo:

    mkdir ./nuevaCaracteristica/modelos

####Crear un archivo
    New-Item <nombre del archivo>
> Se puede agregar un prefijo al nombre del directorio para no tener que navegar a la ruta deseada
> Es más conveniente usar el comando `code` para crear un archivo en memoria

####Abrir VSCode
    code <ruta>
Ejemplo:

    code .
* Si la ruta apunta a un archivo:
    * Si VSCode está abierto, el archivo se abrirá éste en la primera instancia de VSCode que PowerShell encuentre, en su defecto abre VSCode. 
    * Si el archivo no existe, crea un archivo en memoria y lo abre con VSCode (útil para crear archivos en directorios específicos para trabajar inmediatamente en ellos)
* Si es una carpeta, abre una nueva instancia de VSCode con la carpeta especificada

Ejemplos:

    code ./miProyecto
    code ./webApp/componentes/miComponente.html

