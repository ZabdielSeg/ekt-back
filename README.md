## Backend

El back del proyecto es una REST API que permite CRUDs para listar usuarios y autenticación

Para la base de datos se utiliza MongoDB Atlas

## Iteración #1 Instalación de paqueterías

```bash
  npm i
```

No olvides configurar tu `.env` según el `.env.example`

## Las rutas son:

### Rutas de autenticación:


|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/api/auth/registro` |    POST    | Registra un nuevo usuario|
| `/api/auth/login` |    POST    | Revisa que el usuario exista y de ser así se da acceso al sistema. Retorna un JWT|
| `/api/auth/logout` |    POST    | Cierra sesión |

### Rutas de usuarios:

|   Route   | HTTP Verb |   Description   |
|-----------|-----------|-----------------|
| `/api/user/usuarios` |    GET    | Obtiene una lista de todos los proyectos actuales 
