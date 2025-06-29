This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
### 1️⃣ Install dependencies: 
```bash
npm i
```
---
### 2️⃣ Configure PostgreSQL Connection

Create an **.env** file and update the `DATABASE_URL` to your PostgreSQL database:
```
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase?schema=public"
```
💡 Replace `user`, `password`, and `mydatabase` with your actual database credentials. If you don't have postgres locally on your machine, please follow the steps [here](https://github.com/spiced-academy/wd-advanced-syllabus/blob/main/sessions/prisma/use-docker.md) to utilize Docker to quickly create a postgresSQL database.

⚠️ If the link doesn't work, then check this file [here](./use-docker.md).

---
### 3️⃣ Run Migrations to Update the Database
Run the following command to create the database tables:

```bash
npx prisma migrate dev --name init
```
✅ This applies the schema changes and creates the necessary tables in PostgreSQL.
Note: if you don't have a local tool to visualize the tables and modify it, feel free to use the following command: 
```
npx prisma studio
```
✅ This opens a local GUI in your browser where you can view & edit database records & Add, update, and delete rows visually. 

---
### 4️⃣ Generate the Prisma Client

Generate the Prisma Client, which allows Next.js to interact with the database:

```bash
npx prisma generate
```

### 5️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 6️⃣ Available pages

```bash
/users
/dashboard
/login
/register
```

