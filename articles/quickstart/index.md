---
title: Python Setup Guide
description: Setup and use DocumentDB with Python using PyMongo. Learn to connect, create databases, insert documents, and run aggregation queries.
---

Quick start guide for python setup guide.

Learn how to set up and use DocumentDB with Python using the MongoDB Python driver (PyMongo).

## Prerequisites

- Python 3.7+
- pip package manager
- Docker
- Git (for cloning the repository)

## Step 1: Install Python

```bash
pip install pymongo
```

## Step 2: Install optional dependencies

```bash
pip install dnspython
```

## Step 3: Setup DocumentDB using Docker

```bash
# Pull the latest DocumentDB Docker image
docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest

# Tag the image for convenience
docker tag ghcr.io/microsoft/documentdb/documentdb-local:latest documentdb

# Run the container with your chosen username and password
docker run -dt -p 10260:10260 --name documentdb-container documentdb --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
docker image rm -f ghcr.io/microsoft/documentdb/documentdb-local:latest || echo "No existing documentdb image to remove"
```

> [!WARNING]
> During the transition to the Linux Foundation, Docker images may still be hosted on Microsoft's container registry. These will be migrated to the new DocumentDB organization as the transition completes.

> [!NOTE]
> Replace `<YOUR_USERNAME>` and `<YOUR_PASSWORD>` with your desired credentials. You must set these when creating the container for authentication to work.

> [!IMPORTANT]
> Port `10260` is used by default in these instructions to avoid conflicts with other local database services. You can use port `27017` (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your `docker run` command and your connection string accordingly.

## Step 4: Initialize the pymongo client with the credentials from the previous step

```python
import pymongo
from pymongo import MongoClient

# Create a MongoDB client and open a connection to DocumentDB
client = pymongo.MongoClient(
    'mongodb://<YOUR_USERNAME>:<YOUR_PASSWORD>@localhost:10260/?tls=true&tlsAllowInvalidCertificates=true'
)
```

## Step 5: Create a database and collection

```python
quickStartDatabase = client["quickStartDatabase"]
quickStartCollection = quickStartDatabase.create_collection("quickStartCollection")
```

## Step 6: Insert documents

```python
# Insert a single document
quickStartCollection.insert_one({
    'name': 'John Doe',
    'email': 'john@email.com',
    'address': '123 Main St, Anytown, USA',
    'phone': '555-1234'
})

# Insert multiple documents
quickStartCollection.insert_many([
    {
        'name': 'Jane Smith',
        'email': 'jane@email.com',
        'address': '456 Elm St, Othertown, USA',
        'phone': '555-5678'
    },
    {
        'name': 'Alice Johnson',
        'email': 'alice@email.com',
        'address': '789 Oak St, Sometown, USA',
        'phone': '555-8765'
    }
])
```

## Step 7: Read documents

```python
# Read all documents
for document in quickStartCollection.find():
    print(document)

# Read a specific document
singleDocumentReadResult = quickStartCollection.find_one({'name': 'John Doe'})
print(singleDocumentReadResult)
```

## Step 8: Run aggregation pipeline query

```python
pipeline = [
    {'$match': {'name': 'Alice Johnson'}},
    {'$project': {
        '_id': 0,
        'name': 1,
        'email': 1
    }}
]

results = quickStartCollection.aggregate(pipeline)
print("Aggregation results:")
for eachDocument in results:
    print(eachDocument)
```
