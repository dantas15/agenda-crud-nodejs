# Agenda - CRUD

This is the api for project. See the [frontent](https://github.com/gusgalote/agenda-crud-react)

# Run the app

1. Install dependencies

```bash
yarn
```

2. Rename `.env.example` to `.env` and set your database (I'm using postgres) info accordingly
3. Run the migrations

```bash
yarn typeorm migration:run
```

4. Run the app

```
yarn dev
```
