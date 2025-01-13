# Angular-Front-end

# Telco Frontend

Telco Frontend es una aplicación web desarrollada en Angular que permite a los usuarios visualizar su consumo de datos y minutos en tiempo real.

## Descripción

La aplicación se conecta a un backend para obtener información actualizada y proporciona una interfaz intuitiva para la interacción del usuario.

## Estructura del Proyecto

- `src/app`: Contiene los componentes, servicios y módulos de la aplicación.
- `src/environments`: Archivos de configuración para diferentes entornos (desarrollo, producción).
- `angular.json`: Archivo de configuración principal de Angular.
- `package.json`: Contiene las dependencias y scripts del proyecto.

## Configuración de Entorno

Para conectar la aplicación con el backend, modifica el archivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'  // URL del backend
};

