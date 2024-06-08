# Trabajo final IDW

El proyecto contiene la aplicación web en `trabajo_final` y la API proporcionada por la cátedra en la carpeta `idwApi`.

La app funciona tanto junto con la API como en modo estático si es que no está iniciado el servidor backend.

## Instalación

### Para clonar el servidor frontend:

1. Clonar el repo con `gh repo clone IDWGrupo27/TrabajoIntegradorFinal`
2. `cd trabajo_final`
3. `npm install`
4. `npm run start`

### Para clonar el servidor backend:

1. Volver a la carpeta raíz del proyecto con `cd ..`
2. `gh repo clone analiafaure/idwApi`
3. Instalar y configurar MySQL Workbench y MySQL Server para restaurar los esquemas de las bases de datos según las instrucciones provistas por la cátedra en las clases.
4. `cd idwApi`
5. `npm install`
6. `npm run dev`
