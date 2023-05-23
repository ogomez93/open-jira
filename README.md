# Next.js - OpenJira App
To run this locally, a database is required.
```bash
docker-compose up -d
```
MongoDB local URL:
```
mongodb://localhost:27017/entriesdb
```
### Setup environment variables

Create a copy of `.env.template`, rename it to `.env`, and put values to the environment variables

### Run the project

To run the project, either go with the development version:
```bash
yarn dev
```
Or run the production build:
```bash
yarn build
yarn start
```

### Seed the database (optional)

Visit `localhost:3000/api/seed`
