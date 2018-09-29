# Requerimiento de creación de talento

## Glosario

* Inputs o Tipos de entrada: Componentes que permiten al usuario ingresar datos en un formulario, son acompañados por el nombre del concepto que almacena
  - Texto
  - Número
  - ComboBox
  - CheckBox
  - Fecha
  - Etc.

* Placeholder: Texto predefinido que aparece en las entradas de texto antes de que el usuario escriba


Notas:
* Las precondiciones de un componente determinan si éste es visible
* Las postcondiciones de un componente determinan si el valor es válido

## 1. Creación de talentos.
Formulario que permite al usuario definir un nuevo talento o modificar uno existente. La creación de un talento se realiza en 2 pasos: Definir los criterios de creación y definir el talento en sí. Por lo que se definen 2 formularios para reflejar esto. **Esto último es una opinión de Andrés, podría hacerse en uno.**

* Nota

    Si se quiere modificar un talento, y se asume que los criterios también deben ser modificables, hace menos sentido aún separarlo en 2 formularios. 

## 1.1. Formulario de criterios de creación de talento.

### 1.1.1. Componentes o campos del formulario
#### I. Tipo de talento:
- Tipo: entrada tipo comboBox
- Opciones:
  * comun: "Común",
  * instantaneo: "Instantaneo"
  * pasivo: "Pasivo con o sin costes"
  * arma: "Talento de ataque de arma
- Requerido: si

#### II. Clases
- Tipo: componente complejo (definido más adelante)
- Valor: Colección de nombre de clases
- Requerido: si (al menos una clase en la colección)

  *TODO: definir componente selector de clases*

#### II. Tipo de nivel de talento `//cambiar a tipo de escala? o algun nombre más ad hoc?`
- Tipo: entrada tipo comboBox 
- Opciones: Uno de los siguientes
  * estadio: "De 5 estadíos" (nivel 1-5)
  * integral: "Integral" (sin nivel)
  * expansion: "Expansión" (rango 1-5)

  *TODO: generalizar que los niveles de rango se muestran como números romanos*
- Requerido: si

#### III. Definición de rango // nombre poco explicativo
- Pre condición: Tipo de nivel de talento es expansion
- Tipo: entrada tipo texto
- Post condición: Si se selecciona 1 o 4, preguntar si el valor es el correcto `//realmente necesario?`
- Requerido: si
- Post condiciones: valor mayor a cero `//hay máximo?`

#### IV. Siguiente
- Tipo: Botón
- Acción: Llama a la invocación del formulario de creación de talento utilizando los criterios seleccionados 

## 1.2. Formulario de creación de talento
Será separado en 2 grupos:
- Información de ventana de talentos
- Información de ventana de atriburtos

### 1.2.1. Componentes o campos de información de ventana de talentos
#### I. Nombre:
- Tipo: entrada tipo texto
- Placeholder: "Ingrese nombre para este talento"
- Requerido: si
- Post condiciones: no puede ser igual a un talento creado

#### II. Estadío:
- Pre condiciones: Tipo de nivel de talento es estadio
- Tipo: entrada tipo número
- Valor predefinido: 1
- Requerido: si
- Post condiciones: valor en rango [ 1 , 5 ]

#### II. Rango:
- Pre condiciones: Tipo de nivel de talento es expansion
- Tipo: entrada tipo número
- Valor predefinido: 1
- Requerido: si
- Post condiciones: valor mayor a cero  `//¿hay un máximo para los rangos?, revisar`

#### III. Tipo adicional
- Tipo: Componente compuesto por:
  * entrada tipo texto
  * boton que elimina el tipo adicional
- Requerido: no
- Post condiciones: valor no puede ser igual al nombre de un tipo por defecto, ni a un tipo adicional agregado en este talento

#### IV. Nuevo tipo adicional
- Tipo: Botón
- Acción: Inserta en la vista un nuevo Componente de tipo adicional

`El mecanismo de agregación y eliminación de entradas de una propiedad usada en "Tipo adicional" lo generalizaremos como "Componente de múltiple entrada" (nombre provisorio)`

#### V. Condición
- Tipo: Componente de múltiple entrada tipo compuesto
  * hay que definir cómo se estructura una condición
- Requerido: no

#### VI. Coste de tiempo
- Tipo: entrada tipo número (?)
- Requerido: no

#### VII. Coste de energía
- Tipo: Entrada tipo número
- Requerido: no

#### VIII. Otros costes
- Tipo: Componente de múltiple entrada compuesto:
  * texto: Nombre de coste
  * número: Valor del coste
- Requerido: no

#### IX. Duración
- Tipo: entrada tipo número `// asumiendo que se mide siempre en turnos`
- Requerido: no

#### X. Características `// serán computadas?`
- Tipo: 
#### XI. Descripción
- Tipo: entrada tipo cuadro de texto

### 1.2.1. Componentes o campos de información de ventana de atributos