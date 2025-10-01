---
title: Python Setup Guide
---

Learn how to set up and use DocumentDB with Python using the MongoDB Python driver (PyMongo).

## Prerequisites

- Python 3.7 or higher installed on your system
- pip (Python package installer)
- Docker Desktop installed and running
- Basic familiarity with Python and MongoDB concepts

## Step 1: Install Python

```bash
python --version
```

## Step 2: Install optional dependencies

```bash
pip install pymongo
```

## Step 3: Setup DocumentDB using Docker

```bash
docker run -d \
  --name documentdb \
  -p 27018:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  mcr.microsoft.com/documentdb:latest
```

> **Note**: During the transition to the Linux Foundation, Docker images may still be hosted on Microsoft's container registry. These will be migrated to the new DocumentDB organization as the transition completes.

> **Tip**: Replace `admin` and `password` with your desired credentials. You must set these when creating the container for authentication to work.

> **Port Info**: Port `27018` is used by default in these instructions to avoid conflicts with other local database services. You can use port `27017` (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your `docker run` command and your connection string accordingly.

## Step 4: Initialize the pymongo client with the credentials from the previous step

```python
from pymongo import MongoClient

# Connect to DocumentDB
client = MongoClient('mongodb://admin:password@localhost:27018/')
```

## Step 5: Create a database and collection

```python
db = client['my_database']
collection = db['my_collection']
```

## Step 6: Insert documents

```python
# Insert a single document
document = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'age': 30,
    'address': {
        'city': 'Seattle',
        'state': 'WA'
    }
}
result = collection.insert_one(document)
print(f'Inserted document ID: {result.inserted_id}')

# Insert multiple documents
documents = [
    {'name': 'Jane Smith', 'age': 25},
    {'name': 'Bob Johnson', 'age': 35}
]
result = collection.insert_many(documents)
print(f'Inserted {len(result.inserted_ids)} documents')
```

## Step 7: Read documents

```python
# Find all documents
for doc in collection.find():
    print(doc)

# Find documents with a filter
for doc in collection.find({'age': {'$gt': 25}}):
    print(doc)
```

## Step 8: Run aggregation pipeline query

```python
# Aggregation example
pipeline = [
    {'$match': {'age': {'$gte': 25}}},
    {'$group': {
        '_id': '$address.city',
        'average_age': {'$avg': '$age'}
    }},
    {'$sort': {'average_age': -1}}
]

results = collection.aggregate(pipeline)
for result in results:
    print(result)
```
