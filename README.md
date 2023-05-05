# Prueba Tecnica

## Enunciado

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

- Necesita mostrar un input para buscar la película y un botón para buscar.
- Lista las películas y muestra el título, año y poster.
- Que el formulario funcione
- Haz que las películas se muestren en un grid responsive.
- Hacer el fetching de datos a la API

  Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automáticamente al escribir.
- Evita que se haga la búsqueda continuamente al escribir (debounce)

## Installacion

1. Ejecute el comando `npm install`
2. Renombre el archivo **.env.example** a **.env.local**
3. Consiga la API KEY en https://www.omdbapi.com/ y agregueguela a **.env.local**
4. Ejecute el comando `npm run dev` y abra el navegador en http://localhost:5173/

## Comandos

```bash
# Ejecuta el proyecto en modo desarrollo
npm run dev

# Busca errores en el codigo del proyecto
npm run lint

# Formatea el proyecto
npm run format
```
