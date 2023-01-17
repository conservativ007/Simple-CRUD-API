# CRUD API

## This repo contain simple crud api implemented with a nodejs

What you need to do to start this application ?

```sh
git clone git@github.com:conservativ007/Simple-CRUD-API.git
```

```sh
npm install
```

server port listening on port from .env file
scripts

```sh
npm run start:dev
```

```sh
npm run start:prod
```

```sh
npm run test
```

Implemented endpoint api/users:

1. GET api/users is used to get all persons

- Server should answer with status code 200 and all users records

2. GET api/users/{userId}

- Server should answer with status code 200 and record with id === userId if it exists
- Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
- Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

3. POST api/users is used to create record about new user and store it in database

- Server should answer with status code 201 and newly created record
- Server should answer with status code 400 and corresponding message if request body does not contain required fields

4. PUT api/users/{userId} is used to update existing user

- Server should answer with status code 200 and updated record
- Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
- Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

5. DELETE api/users/{userId} is used to delete existing user from database

- Server should answer with status code 204 if the record is found and deleted
- Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
- Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
