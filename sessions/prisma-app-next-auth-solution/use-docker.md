🚀 **Quick Guide: Install Docker & Set Up a PostgreSQL Database with Docker**

Docker allows you to **quickly set up a PostgreSQL database** without installing PostgreSQL directly on your machine. Follow this guide to **install Docker and run PostgreSQL inside a container**.

---

## 1️⃣ Install Docker 🐳

### 📌 Windows & macOS

1. **Download Docker Desktop** from [Docker's official website](https://www.docker.com/products/docker-desktop/).
2. Run the installer and follow the setup instructions and enable WSL 2.
3. Open **Docker Desktop** and ensure it is **running**.
4. Open a terminal (Command Prompt, PowerShell, or macOS Terminal) and run:
```
docker --version
```
✅ If Docker is installed correctly, you should see the installed version. Else, restart your Computer and try the command again and open **Docker Desktop** and ensure it is **running**

##  2️⃣ Pull & Run PostgreSQL with Docker

Now, let's run a PostgreSQL container.

📌 **Run PostgreSQL with a Single Command**

```
docker run --name my-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydatabase -p 5431:5432 -d postgres
```
🔹 **What this does:**

- Creates a new PostgreSQL container named `my-postgres`
- Sets up a user `admin` with password `password`
- Creates a new database `mydatabase`
- Exposes PostgreSQL on **port 5431** why this port? just to avoid using 5432 on your machine which is the default used by postgresql if you have it installed on your machine. So just to avoid using a port that might be used on yout machine. 

✅ **Your database is now running!** 🎉