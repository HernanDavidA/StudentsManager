# StudentsManager

Mi primera prueba tecnica en Node.js

Esta primera versión de este proyecto es una aplicación web que permite a los profesores gestionar los estudiantes de su clase. 

El proyecto se desarrolla en Node.js, utilizando la biblioteca Express para crear el servidor web y la biblioteca MySQL para conectarse a la base de datos.

Este proyecto permitira a los profesores crear, leer, actualizar y eliminar estudiantes de su clase, además en futuras versiones se podrán añadir funcionalidades como la gestión de cursos y calificaciones de cada estudiante registrado.

## Requerimientos

- Node.js
- MySQL

## Instalación

1. Clonar el repositorio en tu computadora.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

```
npm install mysql2 express cors
```


4. Crear una base de datos en MySQL llamada "formulario_estudiantes" y una tabla llamada "estudiantes" con los siguientes campos:

- id (INT, PRIMARY KEY): Identificador único del estudiante.
- nombre (VARCHAR(50)): Nombre del estudiante.

5. Ejecutar el siguiente comando para crear la tabla en la base de datos:

```
mysql -u root -p < db/create_table.sql
```

6. Ejecutar el siguiente comando para crear la base de datos y la tabla en la carpeta "db":

```
npm run db
```

7. Ejecutar el siguiente comando para iniciar el servidor web:

```
npm start
```

8. Abrir un navegador web y acceder a la URL "http://localhost:3000/estudiantes".

## Funcionalidades

### Crear un estudiante

Para crear un estudiante, se debe enviar un objeto JSON con el nombre del estudiante en el campo "nombre". El siguiente código muestra un ejemplo de cómo se podría enviar un objeto JSON para crear un estudiante:

```json
{
  "nombre": "Juan Perez"
}
```

Una vez que se ha enviado el objeto JSON, el servidor web creará un nuevo registro en la tabla "estudiantes" con el nombre proporcionado.

### Leer los estudiantes

Para leer los estudiantes, se debe enviar un objeto JSON vacío. El siguiente código muestra un ejemplo de cómo se podría enviar un objeto JSON para leer los estudiantes:

```json
{}
```

Una vez que se ha enviado el objeto JSON, el servidor web devolverá una respuesta JSON con un array de objetos que representan los estudiantes. Cada objeto en el array tiene los siguientes campos:

- id (INT): Identificador único del estudiante.
- nombre (VARCHAR(50)): Nombre del estudiante.

El siguiente código muestra un ejemplo de cómo se podría interpretar la respuesta JSON para leer los estudiantes:

```json
[
  {
    "id": 1,
    "nombre": "Juan Perez"
  },
  {
    "id": 2,
    "nombre": "Maria Sanchez"
  },
  {
    "id": 3,
    "nombre": "Carlos Rodriguez"
  }
]
```

### Actualizar un estudiante

Para actualizar un estudiante, se debe enviar un objeto JSON con el identificador del estudiante en el campo "id" y el nombre del estudiante en el campo "nombre". El siguiente código muestra un ejemplo de cómo se podría enviar un objeto JSON para actualizar un estudiante:

```json
{
  "id": 1,
  "nombre": "Juan Perez"
}
```

Una vez que se ha enviado el objeto JSON, el servidor web actualizará el registro en la tabla "estudiantes" con el identificador proporcionado y el nombre proporcionado.

### Eliminar un estudiante

Para eliminar un estudiante, se debe enviar un objeto JSON con el identificador del estudiante en el campo "id". El siguiente código muestra un ejemplo de cómo se podría enviar un objeto JSON para eliminar un estudiante:

```json
{
  "id": 1
}
```

Una vez que se ha enviado el objeto JSON, el servidor web eliminará el registro en la tabla "estudiantes" con el identificador proporcionado.

