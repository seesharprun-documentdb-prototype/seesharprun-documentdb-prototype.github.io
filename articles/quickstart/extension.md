---
title: Visual Studio Code Quick Start
description: Get started with DocumentDB using the VS Code extension. Connect to databases, create collections, and manage documents seamlessly.
---

Quick start guide for vs code extension quick start.

Get started with DocumentDB using the Visual Studio Code extension for a seamless development experience.

## Prerequisites

- Visual Studio Code installed
- Docker Desktop installed and running
- Basic familiarity with document databases
- Git installed (for cloning the repository)

## Installing the Extension

1. Open VS Code
1. Navigate to the Extensions marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`)
1. Search for "DocumentDB for VS Code"
1. Click Install
1. Reload VS Code if prompted

## Setting Up Your First Database

### 1. Creating a new DocumentDB instance

```bash
docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest
docker tag ghcr.io/microsoft/documentdb/documentdb-local:latest documentdb
docker run -dt -p 10260:10260 --name documentdb-container documentdb --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
docker image rm -f ghcr.io/microsoft/documentdb/documentdb-local:latest || echo "No existing documentdb image to remove"
```

> [!NOTE]
> Replace `<YOUR_USERNAME>` and `<YOUR_PASSWORD>` with your desired credentials. You must set these when creating the container for authentication to work.

> [!IMPORTANT]
> Port `10260` is used by default in these instructions to avoid conflicts with other local database services. You can use port `27017` (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your `docker run` command and your connection string accordingly.

### 2. Connecting to your database

- Locate and select the DocumentDB icon in the primary Visual Studio Code sidebar.
- Select "Add New Connection"
- In the DocumentDB "Connections" pane, locate and expand the DocumentDB Local node.
- Select the "New Local Conenction" option.
- Confirm the port (default value 10260), username, password, and choose the Disable TLS/SSL option.
  - **NOTE**: TLS/SSL can be enabled, but this walkthrough skips those steps for simplicity. 
- A new DocumentDB Local entry will be added and listed in your DocumentDB Connections area.

> [!NOTE]
> Atlernatively, onn the navigation bar, click on "Connection String". Then, paste a variation of this connection string with the `<USERNAME>` and `<PASSWORD>` placeholders modified to values for your cluster: `mongodb://<YOUR_USERNAME>:<YOUR_PASSWORD>@localhost:10260/?tls=true&tlsAllowInvalidCertificates=true&authMechanism=SCRAM-SHA-256`.

### 3. Creating your first database and collection

- Click on the drop-down next to your local connection and select "Create Database..."
- Enter database name and confirm
- Click on the drop-down next to your created database and select "Create Collection..."
- Enter collection name and confirm
- Repeat for every database and collection you wish to create under your connection

## Working with Documents

### 1. Creating documents

- Use the Table View for quick data entry
- Use the Tree View for hierarchical data exploration
- Use the JSON View for detailed document structure

```json
{
  "name": "Test Document",
  "type": "example",
  "created_at": new Date()
}
```

### 2. Using the document explorer

- Browse documents in multiple views:
  - Table View for quick insights
  - Tree View for hierarchical exploration
  - JSON View for detailed structure
- Use smooth pagination for large datasets

## Import and Export

### 1. Importing data

- Click on the "Import" button on each collection
- Choose your JSON file
- Confirm import

### 2. Exporting data

- Export entire collections or query results using the "Export" button on each collection
