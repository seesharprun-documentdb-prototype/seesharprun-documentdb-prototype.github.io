---
title: MongoDB Shell Quick Start
---

Get started with DocumentDB using the MongoDB shell for a familiar MongoDB-compatible experience.

## Prerequisites

- MongoDB Shell (mongosh) installed
- Docker Desktop installed and running
- Basic familiarity with MongoDB commands
- Terminal or command-line access

## Installation

### Installing MongoDB Shell

**On macOS (using Homebrew):**
```bash
brew install mongosh
```

**On Windows:**
Download and install from [MongoDB Shell Downloads](https://www.mongodb.com/try/download/shell)

**On Linux:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
sudo apt-get install -y mongodb-mongosh
```

### Verify installation

```bash
mongosh --version
```

## Connecting to DocumentDB

Connection string format:
```bash
mongosh "mongodb://admin:password@localhost:27018/"
```

## Basic Operations

### Creating a database and collection

```javascript
use my_database
db.createCollection("my_collection")
```

### Inserting documents

```javascript
db.my_collection.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30
})

db.my_collection.insertMany([
  { name: "Jane Smith", age: 25 },
  { name: "Bob Johnson", age: 35 }
])
```

### Querying documents

```javascript
// Find all documents
db.my_collection.find()

// Find with filter
db.my_collection.find({ age: { $gt: 25 } })

// Find one document
db.my_collection.findOne({ name: "John Doe" })
```

### Updating documents

```javascript
db.my_collection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
)
```

### Deleting documents

```javascript
db.my_collection.deleteOne({ name: "John Doe" })
```

## Working with Indexes

### Creating an index

```javascript
db.my_collection.createIndex({ email: 1 })

// Compound index
db.my_collection.createIndex({ name: 1, age: -1 })
```

### Viewing indexes

```javascript
db.my_collection.getIndexes()
```

## Monitoring and Management

### Viewing database statistics

```javascript
db.stats()
```

### Viewing collection statistics

```javascript
db.my_collection.stats()
```
