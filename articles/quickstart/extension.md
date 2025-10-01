---
title: Visual Studio Code Quick Start
---

Get started with DocumentDB using the Visual Studio Code extension for a seamless development experience.

## Prerequisites

- Visual Studio Code installed
- Docker Desktop installed and running
- Basic familiarity with document databases
- Git installed (for cloning the repository)

## Installing the Extension

1. Open VS Code
2. Navigate to the Extensions marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "DocumentDB for VS Code"
4. Click Install
5. Reload VS Code if prompted

## Setting Up Your First Database

### 1. Creating a new DocumentDB instance

Create a new DocumentDB instance using Docker:

```bash
docker run -d --name documentdb -p 27018:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  mcr.microsoft.com/documentdb:latest
```

> **Note**: During the transition to the Linux Foundation, Docker images may still be hosted on Microsoft's container registry. These will be migrated to the new DocumentDB organization as the transition completes.

> **Port Info**: Port `27018` is used by default in these instructions to avoid conflicts with other local database services. You can use port `27017` (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your `docker run` command and your connection string accordingly.

### 2. Connecting to your database

- Open the DocumentDB extension in VS Code sidebar
- Click "Add Connection"
- Enter the connection string: `mongodb://admin:password@localhost:27018/`
- Click "Connect"

Example connection string:
```
mongodb://admin:password@localhost:27018/
```

### 3. Creating your first database and collection

- Right-click on the connection in the DocumentDB view
- Select "Create Database"
- Enter a database name (e.g., `my_database`)
- Right-click on the new database
- Select "Create Collection"
- Enter a collection name (e.g., `my_collection`)

## Working with Documents

### 1. Creating documents

- Right-click on your collection
- Select "Insert Document"
- Enter your JSON document

Example document:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### 2. Querying documents

- Click on your collection to view documents
- Use the query bar to filter results
- Example query: `{"age": {"$gt": 25}}`

## Import and Export

### Importing data

- Right-click on a collection
- Select "Import from JSON"
- Choose your JSON file
- Confirm the import

### Exporting data

- Right-click on a collection
- Select "Export Collection"
- Choose export format (JSON or CSV)
- Save to your desired location
