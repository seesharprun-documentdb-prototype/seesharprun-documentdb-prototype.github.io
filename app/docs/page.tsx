"use client";
import { useState } from 'react';

export default function Docs() {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedOperator, setSelectedOperator] = useState('Accumulators');
  const [selectedPostgresItem, setSelectedPostgresItem] = useState('Components');
  const [selectedGettingStartedItem, setSelectedGettingStartedItem] = useState('VS Code Extension Quick Start');

  const operatorCategories = [
    'Accumulators',
    'Aggregation', 
    'Arithmetic Expressions',
    'Array Expressions',
    'Array Query',
    'Array Update',
    'Bitwise Operators',
    'Bitwise Query',
    'Bitwise Update',
    'Comparison Query',
    'Conditional Expressions',
    'Date Expressions',
    'Data Size',
    'Evaluation Query',
    'Geospatial',
    'Logical Query',
    'Miscellaneous',
    'Object Expressions',
    'Projection',
    'Variable Expression'
  ];

  const postgresMenuItems = [
    'Components',
    'Functions'
  ];

  const gettingStartedMenuItems = [
    'VS Code Extension Quick Start',
    'MongoDB Shell Quick Start', 
    'Python Setup Guide',
    'Node.js Setup Guide'
  ];

  if (currentPage === 'postgres-api') {
    return (
      <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative flex min-h-screen">
          {/* Left Sidebar */}
          <div className="w-80 bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700/50 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-neutral-700/50">
              <button 
                onClick={() => setCurrentPage('main')}
                className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Documentation
              </button>
              <h1 className="text-2xl font-bold text-white">Postgres Extension API</h1>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="space-y-1">
                {postgresMenuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedPostgresItem(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                      selectedPostgresItem === item
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-neutral-700/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                  {selectedPostgresItem}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
                {selectedPostgresItem !== 'Components' && (
                  <p className="text-gray-400 text-lg">
                    Comprehensive documentation for PostgreSQL extension {selectedPostgresItem.toLowerCase()} and their usage patterns.
                  </p>
                )}
              </div>

              {/* Content based on selected postgres item */}
              {selectedPostgresItem === 'Components' ? (
                <div className="space-y-8">
                  {/* pg_documentdb_core Section */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">pg_documentdb_core</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      pg_documentdb_core is a PostgreSQL extension that introduces BSON datatype support and operations for native Postgres. This core component is essential for enabling document-oriented NoSQL capabilities within a PostgreSQL environment. It provides the foundational data structures and functions required to handle BSON data types, which are crucial for performing CRUD operations on documents.
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-medium text-white">BSON Datatype Support:</span> Adds BSON (Binary JSON) datatype to PostgreSQL, allowing for efficient storage and manipulation of JSON-like documents.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-medium text-white">Native Operations:</span> Implements native PostgreSQL operations for BSON data, ensuring seamless integration and performance.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-medium text-white">Extensibility:</span> Serves as the core building block for additional functionalities and extensions within the DocumentDB ecosystem.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* pg_documentdb_api Section */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">pg_documentdb_api</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      pg_documentdb_api is the public API surface for DocumentDB, providing CRUD functionality on documents stored in the database. This component leverages the capabilities of pg_documentdb_core to offer a comprehensive set of APIs for managing document data within PostgreSQL.
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-medium text-white">CRUD Operations:</span> Provides a rich set of APIs for creating, reading, updating, and deleting documents.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-medium text-white">Advanced Queries:</span> Supports complex queries, including full-text searches, geospatial queries, and vector embeddings.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <div>
                          <span className="font-medium text-white">Integration:</span> Works seamlessly with pg_documentdb_core to deliver robust document management capabilities.
                        </div>
                      </li>
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-3">Usage</h4>
                    <p className="text-gray-300 leading-relaxed">
                      To use pg_documentdb_api, you need to have pg_documentdb_core installed and configured in your PostgreSQL environment. Once set up, you can leverage the APIs provided by pg_documentdb_api to perform various document operations.
                    </p>
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedPostgresItem === 'Functions' ? (
                  <div className="space-y-8">
                    {/* Table of Contents */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Table of Contents</h3>

                      {/* CRUD Operations */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-blue-300 mb-4">CRUD Operations</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'aggregate_cursor_first_page()',
                            'count_query()', 
                            'cursor_get_more()',
                            'delete()',
                            'distinct_query()',
                            'find_and_modify()',
                            'find_cursor_first_page()',
                            'insert()',
                            'insert_one()',
                            'list_collections_cursor_first_page()',
                            'list_indexes_cursor_first_page()',
                            'update()'
                          ].map((func) => (
<a
                              key={func}
                              href={`https://github.com/microsoft/documentdb/wiki/Functions#${func.slice(0, -2)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 text-blue-400 hover:text-blue-300 hover:bg-neutral-700/50 border border-neutral-600/20 hover:border-blue-500/40"
                            >
                              {func}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Collection Management */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-blue-300 mb-4">Collection Management</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'coll_mod()',
                            'create_collection()',
                            'create_collection_view()',
                            'drop_collection()',
                            'drop_database()',
                            'rename_collection()',
                            'shard_collection()'
                          ].map((func) => (
<a
                              key={func}
                              href={`https://github.com/microsoft/documentdb/wiki/Functions#${func.slice(0, -2)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 text-blue-400 hover:text-blue-300 hover:bg-neutral-700/50 border border-neutral-600/20 hover:border-blue-500/40"
                            >
                              {func}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* User Management */}
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-blue-300 mb-4">User Management</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'create_user()',
                            'drop_user()',
                            'update_user()',
                            'users_info()'
                          ].map((func) => (
<a
                              key={func}
                              href={`https://github.com/microsoft/documentdb/wiki/Functions#${func.slice(0, -2)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 text-blue-400 hover:text-blue-300 hover:bg-neutral-700/50 border border-neutral-600/20 hover:border-blue-500/40"
                            >
                              {func}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Utility Functions */}
                      <div>
                        <h4 className="text-lg font-medium text-blue-300 mb-4">Utility Functions</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'binary_extended_version()',
                            'binary_version()'
                          ].map((func) => (
<a
                              key={func}
                              href={`https://github.com/microsoft/documentdb/wiki/Functions#${func.slice(0, -2)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 text-blue-400 hover:text-blue-300 hover:bg-neutral-700/50 border border-neutral-600/20 hover:border-blue-500/40"
                            >
                              {func}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Footer */}
                    <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="text-center text-sm text-gray-400">
                          <p className="mb-2">
                            Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                          </p>
                          <p>
                            For web site terms of use, trademark policy and other project policies please see{" "}
                            <a 
                              href="https://lfprojects.org" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              https://lfprojects.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </footer>
                  </div>
                ) : (
                /* Sample content for other items */
                <div className="space-y-8">
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The {selectedPostgresItem} section provides comprehensive information about PostgreSQL extension 
                      capabilities. These components are essential for building robust database applications with document storage features.
                    </p>
                    <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                      <p className="text-sm text-gray-400 mb-2">Example usage:</p>
                      <code className="text-green-400 font-mono text-sm">
                        SELECT * FROM pg_extension WHERE extname = 'documentdb';
                      </code>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'getting-started') {
    return (
      <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative flex min-h-screen">
          {/* Left Sidebar */}
          <div className="w-80 bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700/50 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-neutral-700/50">
              <button 
                onClick={() => setCurrentPage('main')}
                className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Documentation
              </button>
              <h1 className="text-2xl font-bold text-white">Getting Started</h1>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="space-y-1">
                {gettingStartedMenuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedGettingStartedItem(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                      selectedGettingStartedItem === item
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-neutral-700/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                  {selectedGettingStartedItem}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg">
                  Quick start guide for {selectedGettingStartedItem.toLowerCase()}.
                </p>
              </div>

              {/* Content based on selected getting started item */}
              {selectedGettingStartedItem === 'VS Code Extension Quick Start' ? (
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="mb-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Get started with DocumentDB using the Visual Studio Code extension for a seamless development experience.
                    </p>
                  </div>

                  {/* Prerequisites */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Prerequisites</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Visual Studio Code installed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Docker Desktop installed and running</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Basic familiarity with document databases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Git installed (for cloning the repository)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Installing the Extension */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Installing the Extension</h3>
                    <ol className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">1.</span>
                        <span>Open VS Code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">2.</span>
                        <span>Navigate to the Extensions marketplace (<code className="bg-neutral-900/50 px-2 py-1 rounded text-green-400 font-mono">Ctrl+Shift+X</code> or <code className="bg-neutral-900/50 px-2 py-1 rounded text-green-400 font-mono">Cmd+Shift+X</code>)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">3.</span>
                        <span>Search for "DocumentDB for VS Code"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">4.</span>
                        <span>Click Install</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">5.</span>
                        <span>Reload VS Code if prompted</span>
                      </li>
                    </ol>
                  </div>

                  {/* Setting Up Your First Database */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Setting Up Your First Database</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">1. Creating a new DocumentDB instance</h4>
                        <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4">
                          <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              {`docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest
docker tag ghcr.io/microsoft/documentdb/documentdb-local:latest documentdb
docker run -dt -p 10260:10260 --name documentdb-container documentdb --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
docker image rm -f ghcr.io/microsoft/documentdb/documentdb-local:latest || echo "No existing documentdb image to remove"`}
                          </pre>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                          <p className="text-blue-200 text-sm">
                            <span className="font-medium">Note:</span> Replace <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_USERNAME&gt;</code> and <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_PASSWORD&gt;</code> with your desired credentials. You must set these when creating the container for authentication to work.
                          </p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-blue-200 text-sm">
                            <span className="font-medium">Port Note:</span> Port <code className="bg-blue-900/30 px-1 rounded">10260</code> is used by default in these instructions to avoid conflicts with other local database services. You can use port <code className="bg-blue-900/30 px-1 rounded">27017</code> (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your <code className="bg-blue-900/30 px-1 rounded">docker run</code> command and your connection string accordingly.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">2. Connecting to your database</h4>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Click the DocumentDB icon in the VS Code sidebar</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Click "Add New Connection"</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>On the navigation bar, click on "Connection String"</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Paste your connection string:</span>
                          </li>
                        </ul>
                        <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                          <code className="text-green-400 font-mono text-sm break-all">
                            mongodb://&lt;YOUR_USERNAME&gt;:&lt;YOUR_PASSWORD&gt;@localhost:10260/?tls=true&tlsAllowInvalidCertificates=true&authMechanism=SCRAM-SHA-256
                          </code>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">3. Creating your first database and collection</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Click on the drop-down next to your local connection and select "Create Database..."</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Enter database name and confirm</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Click on the drop-down next to your created database and select "Create Collection..."</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Enter collection name and confirm</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Repeat for every database and collection you wish to create under your connection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Working with Documents */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Working with Documents</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">1. Creating documents</h4>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Use the Table View for quick data entry</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Use the Tree View for hierarchical data exploration</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Use the JSON View for detailed document structure</span>
                          </li>
                        </ul>
                        <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                          <pre className="text-green-400 font-mono text-sm">
              {`{
  "name": "Test Document",
  "type": "example",
  "created_at": new Date()
}`}
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">2. Using the document explorer</h4>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Browse documents in multiple views:</span>
                          </li>
                        </ul>
                        <div className="ml-6 space-y-2 text-gray-300 mb-4">
                          <div className="flex items-start">
                            <span className="text-purple-400 mr-3 mt-1">-</span>
                            <span>Table View for quick insights</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-purple-400 mr-3 mt-1">-</span>
                            <span>Tree View for hierarchical exploration</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-purple-400 mr-3 mt-1">-</span>
                            <span>JSON View for detailed structure</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Use smooth pagination for large datasets</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Import and Export */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Import and Export</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">1. Importing data</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Click on the "Import" button on each collection</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Choose your JSON file</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Confirm import</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">2. Exporting data</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Export entire collections or query results using the "Export" button on each collection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Debugging and Troubleshooting */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Debugging and Troubleshooting</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">1. Common issues and solutions</h4>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">2. Using the extension logs</h4>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">3. Getting support</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Visit our <a href="https://github.com/microsoft/vscode-documentdb" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">GitHub repository</a></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Join the community discussions on <a href="#" className="text-blue-400 hover:text-blue-300 underline">Discord</a></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>Check documentation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Next Steps</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Explore advanced querying capabilities in the <button onClick={() => setCurrentPage('api-reference')} className="text-blue-400 hover:text-blue-300 underline">API Reference</button></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Learn about indexing strategies in the <button onClick={() => setCurrentPage('architecture')} className="text-blue-400 hover:text-blue-300 underline">Architecture</button> section</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Connect your application using one of our <button onClick={() => setSelectedGettingStartedItem('Python Setup Guide')} className="text-blue-400 hover:text-blue-300 underline">Language Guides</button></span>
                      </li>
                    </ul>
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : 
                selectedGettingStartedItem === 'MongoDB Shell Quick Start' ? (
                  <div className="space-y-8">
                    {/* Introduction */}
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Get started with DocumentDB using the MongoDB shell for a familiar MongoDB-compatible experience.
                      </p>
                    </div>

                    {/* Prerequisites */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Prerequisites</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>MongoDB Shell (mongosh) installed</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Docker Desktop installed and running</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Basic MongoDB knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Git installed (for cloning the repository)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Installation */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Installation</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Setting up DocumentDB locally</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4">
                            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                {`# Pull the latest DocumentDB Docker image
docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest

# Tag the image for convenience
docker tag ghcr.io/microsoft/documentdb/documentdb-local:latest documentdb

# Run the container with your chosen username and password
docker run -dt -p 10260:10260 --name documentdb-container documentdb --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
docker image rm -f ghcr.io/microsoft/documentdb/documentdb-local:latest || echo "No existing documentdb image to remove"`}
                            </pre>
                          </div>
                          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                            <p className="text-blue-200 text-sm">
                              <span className="font-medium">Note:</span> Replace <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_USERNAME&gt;</code> and <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_PASSWORD&gt;</code> with your desired credentials. You must set these when creating the container for authentication to work.
                            </p>
                          </div>
                          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <p className="text-blue-200 text-sm">
                              <span className="font-medium">Port Note:</span> Port <code className="bg-blue-900/30 px-1 rounded">10260</code> is used by default in these instructions to avoid conflicts with other local database services. You can use port <code className="bg-blue-900/30 px-1 rounded">27017</code> (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your <code className="bg-blue-900/30 px-1 rounded">docker run</code> command and your connection string accordingly.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Starting the server</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4">
                            <pre className="text-green-400 font-mono text-sm">
                {`# The server will be available at localhost:10260 (or your chosen port)
# You can verify the server is running using:
docker ps`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connecting to DocumentDB */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Connecting to DocumentDB</h3>
                      <p className="text-gray-300 mb-3">Connection string format</p>
                      <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                        <pre className="text-green-400 font-mono text-sm break-all">
                {`mongosh "mongodb://<YOUR_USERNAME>:<YOUR_PASSWORD>@localhost:10260/?tls=true&tlsAllowInvalidCertificates=true"`}
                        </pre>
                      </div>
                    </div>

                    {/* Basic Operations */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Basic Operations</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Creating databases and collections</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Create/switch to a database
use mydb

// Create a collection
db.createCollection("users")

// Create another collection
db.createCollection("logs")`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Inserting documents</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Insert a single document
db.users.insertOne({ name: "John Doe", email: "john@example.com", created_at: new Date() })

// Insert multiple documents
db.users.insertMany([
  { name: "Jane Smith", email: "jane@example.com" }, 
  { name: "Bob Johnson", email: "bob@example.com" }
])`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Querying documents</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Find all documents
db.users.find()

// Find with criteria
db.users.find({ name: "John Doe" })

// Find with projection
db.users.find({}, { name: 1, email: 1, _id: 0 })

// Complex queries
db.users.find(
{ $and: 
  [{ 
    created_at: { $gte: new Date("2025-01-01") } 
   }, 
   { 
    email: { $regex: "@example.com$" } 
   }
  ] 
})`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">4. Updating documents</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Update a single document
db.users.updateOne({ name: "John Doe" }, { $set: { status: "active" } })

// Update multiple documents
db.users.updateMany({ email: { $regex: "@example.com$" } }, { $set: { domain: "example.com" } })`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">5. Deleting documents</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Delete a single document
db.users.deleteOne({ name: "John Doe" })

// Delete multiple documents
db.users.deleteMany({ status: "inactive" })`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Working with Indexes */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Working with Indexes</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Understanding index types</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Available index types:
// - Single field
// - Compound
// - Multi-key
// - Text
// - Geospatial
// - Vector`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Creating indexes</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Single field index
db.users.createIndex({ email: 1 })

// Compound index
db.users.createIndex({ name: 1, email: 1 })

// Text index
db.articles.createIndex({ content: "text" })

// Geospatial index
db.places.createIndex({ location: "2dsphere" })

// Vector index
db.products.createIndex({ 
  embedding: "vector",
  vectorOptions: { dimensions: 384 }
})`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Index strategies</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Partial index
db.orders.createIndex(
  { orderDate: 1 },
  { partialFilterExpression: { status: "active" } }
)`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Features */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Advanced Features</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Aggregation pipeline</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`db.orders.aggregate([
{ $match: { status: "completed" } },
{ $group: {
    _id: "$customer",
    total: { $sum: "$amount" },
    count: { $sum: 1 }
  }},
  { $sort: { total: -1 } }
])`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Vector search operations</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`db.products.find({
$vectorSearch: {
    queryVector: [0.1, 0.2, 0.3],
    path: "embedding",
    numCandidates: 100,
    limit: 10
  }
})`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Geospatial queries</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`db.places.find({
location: {
  $near: {
    $geometry: {
      type: "Point",
      coordinates: [-73.9667, 40.78]
    },
    $maxDistance: 1000
  }
}})`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Monitoring and Management */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Monitoring and Management</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Server status commands</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Get server status
db.serverStatus()

// Get server information
db.runCommand({ buildInfo: 1 })`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Database statistics</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Get database stats
db.stats()

// Get collection stats
db.users.stats()`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Collection statistics</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`// Get collection size
db.users.dataSize()

// Get index sizes
db.users.stats().indexSizes`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Best Practices */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Best Practices</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Connection management</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Use connection pooling</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Set appropriate timeouts</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Handle reconnection logic</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Query optimization</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Use explain() for query analysis</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Create appropriate indexes</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Monitor query performance</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Error handling</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`try {
    db.users.insertOne({ _id: 1, name: "Test" })
  } catch (error) {
  print("Error:", error.message)
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Next Steps</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Explore the API reference for advanced features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Learn about advanced features in the <button onClick={() => setCurrentPage('architecture')} className="text-blue-400 hover:text-blue-300 underline">Architecture</button> section</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Connect your application using one of our language guides</span>
                        </li>
                      </ul>
                    </div>
                    {/* Footer */}
                    <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="text-center text-sm text-gray-400">
                          <p className="mb-2">
                            Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                          </p>
                          <p>
                            For web site terms of use, trademark policy and other project policies please see{" "}
                            <a 
                              href="https://lfprojects.org" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              https://lfprojects.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </footer>
                  </div>
                ) : 
                selectedGettingStartedItem === 'Python Setup Guide' ? (
                  <div className="space-y-8">
                    {/* Introduction */}
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Learn how to set up and use DocumentDB with Python using the official MongoDB Python driver (PyMongo).
                      </p>
                    </div>

                    {/* Prerequisites */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Prerequisites</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Python 3.7+</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>pip package manager</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>DocumentDB installed and running (see Pre-built Packages)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Basic Python knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Git installed (for cloning the repository)</span>
                        </li>
                      </ul>
                    </div>

                    {/* Installation */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Installation</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Installing the MongoDB Python driver</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`pip install pymongo`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Optional dependencies</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`pip install dnspython  # For connection string support`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Setup */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Project Setup (skip if already done)</h3>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-3">1. Setting up DocumentDB with Docker</h4>
                        <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4">
                          <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                {`# Pull the latest DocumentDB Docker image
docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest

# Tag the image for convenience
docker tag ghcr.io/microsoft/documentdb/documentdb-local:latest documentdb

# Run the container with your chosen username and password
docker run -dt -p 10260:10260 --name documentdb-container documentdb --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
docker image rm -f ghcr.io/microsoft/documentdb/documentdb-local:latest || echo "No existing documentdb image to remove"`}
                          </pre>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                          <p className="text-blue-200 text-sm">
                            <span className="font-medium">Note:</span> Replace <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_USERNAME&gt;</code> and <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_PASSWORD&gt;</code> with your desired credentials. You must set these when creating the container for authentication to work.
                          </p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <p className="text-blue-200 text-sm">
                            <span className="font-medium">Port Note:</span> Port <code className="bg-blue-900/30 px-1 rounded">10260</code> is used by default in these instructions to avoid conflicts with other local database services. You can use port <code className="bg-blue-900/30 px-1 rounded">27017</code> (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your <code className="bg-blue-900/30 px-1 rounded">docker run</code> command and your connection string accordingly.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connecting to DocumentDB */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Connecting to DocumentDB</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Basic Connection</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`import pymongo
import sys

# Create a MongoDB client and open a connection to DocumentDB
client = pymongo.MongoClient(
  'mongodb://localhost:27017'
)

# Specify the database to be used
db = client.sample_database

# Specify the collection
collection = db.sample_collection`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Connection with Authentication</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# With username and password
client = pymongo.MongoClient(
  'mongodb://username:password@localhost:27017'
)`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Connection with Options</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# With additional options
client = pymongo.MongoClient(
  'mongodb://localhost:27017',
   maxPoolSize=50,
   retryWrites=False,
   w='majority'
)`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Basic Operations */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Basic Operations</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Creating collections</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Create a new collection
db.create_collection('users')

# Create a collection with options
db.create_collection('logs')`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Document operations</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Insert a single document
collection.insert_one({
  'name': 'John Doe',
  'email': 'john@example.com',
  'created_at': datetime.utcnow()
})

# Insert multiple documents
collection.insert_many([
  {'name': 'Jane Smith', 'email': 'jane@example.com'},
  {'name': 'Bob Johnson', 'email': 'bob@example.com'}
])

# Find documents
result = collection.find({'name': 'John Doe'})

# Find with projection
result = collection.find(
    {'email': {'$regex': '@example.com$'}},
    {'name': 1, 'email': 1, '_id': 0}
)

# Update a document
collection.update_one(
    {'name': 'John Doe'},
    {'$set': {'status': 'active'}}
)

# Delete documents
collection.delete_one({'name': 'John Doe'})`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Working with BSON Types */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Working with BSON Types</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. ObjectId</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`from bson import ObjectId

# Find by ObjectId
doc = collection.find_one({'_id': ObjectId('...')})`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. DateTime</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`from datetime import datetime

# Insert with timestamp
collection.insert_one({
    'name': 'Event',
    'timestamp': datetime.utcnow()
})`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Features */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Advanced Features</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Bulk operations</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Initialize bulk operations
bulk = collection.initialize_ordered_bulk_op()

# Add operations
bulk.find({'status': 'pending'}).update({'$set': {'status': 'processed'}})
bulk.find({'age': {'$lt': 18}}).delete()

# Execute
result = bulk.execute()`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Aggregation framework</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`pipeline = [
    {'$match': {'status': 'active'}},
    {'$group': {
        '_id': '$type',
        'count': {'$sum': 1},
        'avg_value': {'$avg': '$value'}
    }}
]
results = collection.aggregate(pipeline)`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Vector search</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Vector similarity search
results = collection.find({
    '$vectorSearch': {
        'queryVector': [0.1, 0.2, 0.3],
        'path': 'embeddings',
        'numCandidates': 100,
        'limit': 10
    }
})`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">4. PostgreSQL Integration</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Access PostgreSQL features directly
from documentdb_api import DocumentDB

# Initialize DocumentDB with PostgreSQL support
db = DocumentDB(client)

# Execute SQL queries on BSON documents
result = db.sql_query(
    "SELECT jsonb_path_query(data, '$.name') FROM collection WHERE data @? '$.age > 21'"
)`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Error Handling */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Error Handling</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Connection errors</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`try:
client = pymongo.MongoClient(connection_string)
client.admin.command('ping')
except pymongo.errors.ConnectionError as e:
print(f"Connection error: {e}")`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Operation errors</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`from pymongo.errors import OperationFailure

try:
    result = collection.insert_one({'_id': existing_id})
except OperationFailure as e:
    print(f"Operation failed: {e}")`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Best Practices */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Best Practices</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Connection pooling</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Configure connection pool
client = pymongo.MongoClient(
    connection_string,
    maxPoolSize=50,
    waitQueueTimeoutMS=2000
)`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Query optimization</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Use explain for query analysis
explanation = collection.find({'status': 'active'}).explain()`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">3. Proper cleanup</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`# Always close connections when done
try:
    # Your code here
finally:
    client.close()`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sample Application */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Sample Application</h3>
                      <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                        <pre className="text-green-400 font-mono text-sm">
                {`from flask import Flask, jsonify
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client.sample_database

@app.route('/users', methods=['GET'])
def get_users():
    users = list(db.users.find({}, {'_id': 0}))
    return jsonify(users)

@app.route('/user/<name>', methods=['GET'])
def get_user(name):
    user = db.users.find_one({'name': name}, {'_id': 0})
    return jsonify(user)

if __name__ == '__main__':
    app.run(debug=True)`}
                        </pre>
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Next Steps</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Explore advanced features in the <button onClick={() => setCurrentPage('api-reference')} className="text-blue-400 hover:text-blue-300 underline">API Reference</button></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Learn about indexing strategies in the <button onClick={() => setCurrentPage('architecture')} className="text-blue-400 hover:text-blue-300 underline">Architecture</button></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Check out the <button onClick={() => setSelectedGettingStartedItem('MongoDB Shell Quick Start')} className="text-blue-400 hover:text-blue-300 underline">MongoDB Shell Guide</button> for additional query examples</span>
                        </li>
                      </ul>
                    </div>
                    {/* Footer */}
                    <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="text-center text-sm text-gray-400">
                          <p className="mb-2">
                            Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                          </p>
                          <p>
                            For web site terms of use, trademark policy and other project policies please see{" "}
                            <a 
                              href="https://lfprojects.org" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              https://lfprojects.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </footer>
                  </div>
                ) :
                selectedGettingStartedItem === 'Node.js Setup Guide' ? (
                  <div className="space-y-8">
                    {/* Introduction */}
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Learn how to set up and use DocumentDB with Node.js using the official MongoDB Node.js driver.
                      </p>
                    </div>

                    {/* Prerequisites */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Prerequisites</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Node.js 14.x or later</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>npm or yarn package manager</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>DocumentDB installed and running</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Basic Node.js knowledge</span>
                        </li>
                      </ul>
                    </div>

                    {/* Setting up DocumentDB with Docker */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Setting up DocumentDB with Docker</h3>
                      <p className="text-gray-300 mb-4">
                        Before connecting from Node.js, make sure you have a running DocumentDB instance using Docker:
                      </p>

                      <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-4">
                        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                {`# Pull the latest DocumentDB Docker image
docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest

# Tag the image for convenience
docker tag ghcr.io/microsoft/documentdb/documentdb-local:latest documentdb

# Run the container with your chosen username and password
docker run -dt -p 10260:10260 --name documentdb-container documentdb --username <YOUR_USERNAME> --password <YOUR_PASSWORD>
docker image rm -f ghcr.io/microsoft/documentdb/documentdb-local:latest || echo "No existing documentdb image to remove"`}
                        </pre>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                        <p className="text-blue-200 text-sm">
                          <span className="font-medium">Note:</span> Replace <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_USERNAME&gt;</code> and <code className="bg-blue-900/30 px-1 rounded">&lt;YOUR_PASSWORD&gt;</code> with your desired credentials. You must set these when creating the container for authentication to work.
                        </p>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                        <p className="text-blue-200 text-sm">
                          <span className="font-medium">Port Note:</span> Port <code className="bg-blue-900/30 px-1 rounded">10260</code> is used by default in these instructions to avoid conflicts with other local database services. You can use port <code className="bg-blue-900/30 px-1 rounded">27017</code> (the standard MongoDB port) or any other available port if you prefer. If you do, be sure to update the port number in both your <code className="bg-blue-900/30 px-1 rounded">docker run</code> command and your connection string accordingly.
                        </p>
                      </div>
                    </div>

                    {/* Installation */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Installation</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Creating a new Node.js project</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`mkdir my-documentdb-app
cd my-documentdb-app
npm init -y`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Installing the MongoDB driver</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`npm install mongodb`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connecting to DocumentDB */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Connecting to DocumentDB</h3>
                      <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                        <pre className="text-green-400 font-mono text-sm">
                {`const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    const db = client.db('your_database');
      return db;
  } catch (error) {
    console.error('Connection error:', error);
    throw error;
  }
}`}
                        </pre>
                      </div>
                    </div>

                    {/* Basic Operations */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Basic Operations</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">1. Creating collections</h4>
                          <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                            <pre className="text-green-400 font-mono text-sm">
                {`const collection = db.collection('your_collection');`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">2. Document operations</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Insert operations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Find operations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Update operations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-3 mt-1">-</span>
                              <span>Delete operations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Working with Promises and Async/Await */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Working with Promises and Async/Await</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Promise-based operations</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. Async/await patterns</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Error handling</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Connection management</h4>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Features */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Advanced Features</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Bulk operations</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. Aggregation framework</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Vector search</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Geospatial queries</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">5. Change streams</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">6. Transactions</h4>
                        </div>
                      </div>
                    </div>

                    {/* Error Handling */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Error Handling</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Connection errors</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. Operation errors</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Timeout handling</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Retry strategies</h4>
                        </div>
                      </div>
                    </div>

                    {/* Best Practices */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Best Practices</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Connection pooling</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. Query optimization</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Bulk operations</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Error handling</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">5. Security considerations</h4>
                        </div>
                      </div>
                    </div>

                    {/* Sample Applications */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Sample Applications</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Basic CRUD application</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. REST API with Express</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Vector search example</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Real-time applications with change streams</h4>
                        </div>
                      </div>
                    </div>

                    {/* Testing */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Testing</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Setting up test environment</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. Unit testing with Jest/Mocha</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Integration testing</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Mock testing</h4>
                        </div>
                      </div>
                    </div>

                    {/* Deployment */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-6">Deployment</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">1. Development setup</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">2. Production considerations</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">3. Monitoring and logging</h4>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-2">4. Performance optimization</h4>
                        </div>
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Next Steps</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Explore advanced features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Learn about indexing strategies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          <span>Build your first application</span>
                        </li>
                      </ul>
                    </div>
                    {/* Footer */}
                    <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="text-center text-sm text-gray-400">
                          <p className="mb-2">
                            Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                          </p>
                          <p>
                            For web site terms of use, trademark policy and other project policies please see{" "}
                            <a 
                              href="https://lfprojects.org" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline"
                            >
                              https://lfprojects.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </footer>
                  </div>
                ) :
                (
                // Keep your existing content for other menu items
                <div className="space-y-8">
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4">Getting Started with {selectedGettingStartedItem}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Welcome to the {selectedGettingStartedItem} guide. This section will help you get up and running quickly.
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3">Step 1: Installation</h4>
                    <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30 mb-6">
                      <code className="text-green-400 font-mono text-sm">
                        # Installation instructions for {selectedGettingStartedItem}
                      </code>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-3">Step 2: Configuration</h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Configure your environment for optimal use with DocumentDB.
                    </p>

                    <h4 className="text-lg font-semibold text-white mb-3">Step 3: First Steps</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Start building with DocumentDB using {selectedGettingStartedItem}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (currentPage === 'api-reference') {
    return (
      <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative flex min-h-screen">
          {/* Left Sidebar */}
          <div className="w-80 bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700/50 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-neutral-700/50">
              <button 
                onClick={() => setCurrentPage('main')}
                className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Documentation
              </button>
              <h1 className="text-2xl font-bold text-white">Operator Docs</h1>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="space-y-1">
                {operatorCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedOperator(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                      selectedOperator === category
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-neutral-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                  {selectedOperator}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg">
                  Comprehensive documentation for {selectedOperator.toLowerCase()} operators and their usage patterns.
                </p>
              </div>

              {/* Content based on selected operator */}
              {selectedOperator === 'Accumulators' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Accumulator Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bottom',
                      '$bottomN',
                      '$first',
                      '$firstN',
                      '$last',
                      '$lastN',
                      '$top',
                      '$topN'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Aggregation' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Aggregation Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$count',
                      '$facet',
                      '$geoNear',
                      '$lookup',
                      '$match'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Arithmetic Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Arithmetic Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$abs',
                      '$add',
                      '$ceil',
                      '$divide',
                      '$exp',
                      '$floor',
                      '$ln',
                      '$log',
                      '$log10'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Array Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Array Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$arrayElemAt',
                      '$arrayToObject',
                      '$concatArrays',
                      '$filter',
                      '$in',
                      '$indexOfArray',
                      '$isArray',
                      '$objectToArray',
                      '$reverseArray',
                      '$map',
                      '$range',
                      '$reduce',
                      '$size',
                      '$sortArray',
                      '$zip'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Array Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Array Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$all',
                      '$elemMatch',
                      '$size'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Array Update' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Array Update Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$addToSet',
                      '$each',
                      '$pop',
                      '$pull',
                      '$pullAll',
                      '$push',
                      '$slice',
                      '$sort'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Bitwise Operators' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bitwise Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bitand',
                      '$bitnot',
                      '$bitor',
                      '$bitxnor'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Bitwise Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bitwise Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bitsAllClear',
                      '$bitsAllSet',
                      '$bitsAnyClear',
                      '$bitsAnySet'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Bitwise Update' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bitwise Update Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bit'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Comparison Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Comparison Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$eq',
                      '$gt',
                      '$gte',
                      '$in',
                      '$lt',
                      '$lte',
                      '$ne',
                      '$nin'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Conditional Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Conditional Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$cond',
                      '$ifNull',
                      '$switch'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Date Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Date Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$dateAdd',
                      '$dateDiff',
                      '$dateFromParts',
                      '$dateFromString'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Data Size' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Data Size Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$binarysize',
                      '$bsonsize'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Evaluation Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Evaluation Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$expr'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Geospatial' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Geospatial Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$box',
                      '$center',
                      '$centerSphere',
                      '$geoIntersects',
                      '$geoWithin',
                      '$geometry',
                      '$maxDistance',
                      '$minDistance',
                      '$near',
                      '$nearSphere',
                      '$polygon'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Logical Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Logical Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$and',
                      '$nor',
                      '$not',
                      '$or'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Miscellaneous' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Miscellaneous Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$comment',
                      '$rand'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Object Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Object Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$mergeObjects',
                      '$objectToArray',
                      '$setField'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Projection' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Projection Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$elemMatch',
                      '$meta',
                      '$slice'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : selectedOperator === 'Variable Expression' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Variable Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$let'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                  {/* Footer */}
                  <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="text-center text-sm text-gray-400">
                        <p className="mb-2">
                          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
                        </p>
                        <p>
                          For web site terms of use, trademark policy and other project policies please see{" "}
                          <a 
                            href="https://lfprojects.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            https://lfprojects.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              ) : (
                /* Sample content for other operators */
                <div className="space-y-8">
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The {selectedOperator} category provides powerful operators for document manipulation and querying. 
                      These operators are essential for building complex database operations and data transformations.
                    </p>
                    <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                      <p className="text-sm text-gray-400 mb-2">Example usage:</p>
                      <code className="text-green-400 font-mono text-sm">
                        db.collection.find({`{${selectedOperator.toLowerCase()}_operator: value}`})
                      </code>
                    </div>
                  </div>

                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Common Operators</h3>
                    <div className="grid gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20">
                          <h4 className="text-blue-300 font-medium mb-2">Operator {i}</h4>
                          <p className="text-gray-400 text-sm mb-3">
                            Description of operator {i} functionality and use cases.
                          </p>
                          <div className="bg-black/30 rounded p-3 border border-neutral-600/20">
                            <code className="text-green-400 font-mono text-xs">
                              {`{ $operator${i}: { field: "value" } }`}
                            </code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Best Practices</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Always validate input parameters before using {selectedOperator.toLowerCase()} operators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Consider performance implications when chaining multiple operators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Use appropriate indexing strategies to optimize {selectedOperator.toLowerCase()} queries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

if (currentPage === 'architecture') {
    return (
      <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative flex min-h-screen">
          {/* Header with back button */}
          <div className="w-full">
            <div className="p-6 border-b border-neutral-700/50">
              <button 
                onClick={() => setCurrentPage('main')}
                className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Documentation
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center min-h-[80vh]">
              <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-8">
                  DocumentDB Technical Architecture
                </h1>

                {/* JSON Construction Graphic */}
<div className="relative mb-8">
  {/* Main container with glow effect */}
  <div className="relative w-80 h-80 mx-auto">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>

    {/* JSON Document container */}
    <div className="relative w-full h-full bg-gradient-to-br from-neutral-800/90 via-neutral-900/90 to-black/90 backdrop-blur-sm rounded-2xl border border-neutral-700/50 overflow-hidden p-6">

      {/* JSON Content */}
      <div className="h-full flex flex-col justify-center font-mono text-sm">
        <div className="text-yellow-400">{`{`}</div>
        <div className="ml-4 text-blue-400">"status"<span className="text-white">:</span> <span className="text-green-400">"building"</span><span className="text-white">,</span></div>
        <div className="ml-4 text-blue-400">"progress"<span className="text-white">:</span> <span className="text-orange-400">75</span><span className="text-white">,</span></div>
        <div className="ml-4 text-blue-400">"architecture"<span className="text-white">:</span> <span className="text-yellow-400">{`{`}</span></div>
        <div className="ml-8 text-blue-400">"layers"<span className="text-white">:</span> <span className="text-yellow-400">[</span></div>
        <div className="ml-12 text-green-400">"DocumentDB API"<span className="text-white">,</span></div>
        <div className="ml-12 text-green-400">"DocumentDB Core"<span className="text-white">,</span></div>
        <div className="ml-12 text-green-400">"DocumentDB Gateway"</div>
        <div className="ml-8 text-yellow-400">]<span className="text-white">,</span></div>
        <div className="ml-8 text-blue-400">"coming_soon"<span className="text-white">:</span> <span className="text-green-400">true</span></div>
        <div className="ml-4 text-yellow-400">{`}`}<span className="text-white">,</span></div>
        <div className="ml-4 text-blue-400">"tools"<span className="text-white">:</span> <span className="text-yellow-400">[</span>
          <span className="inline-block ml-2 animate-bounce">🔨</span>
          <span className="inline-block ml-1 animate-pulse">⚙️</span>
          <span className="inline-block ml-1 animate-bounce" style={{animationDelay: '0.5s'}}>🔧</span>
        <span className="text-yellow-400">]</span></div>
        <div className="text-yellow-400">{`}`}</div>
      </div>

      {/* Construction helmet on JSON */}
      <div className="absolute top-4 right-6 text-2xl animate-bounce">👷‍♂️</div>

      {/* Construction cone */}
      <div className="absolute bottom-6 right-8 text-xl animate-pulse">🚧</div>

      {/* Blueprints */}
      <div className="absolute bottom-4 left-6 text-lg animate-pulse" style={{animationDelay: '1s'}}>📐</div>

      {/* Floating construction particles */}
      <div className="absolute top-12 left-12 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-16 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
      <div className="absolute bottom-20 left-16 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1.4s'}}></div>

      {/* Progress indicator */}
      <div className="absolute top-4 left-4 flex items-center space-x-1">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  </div>
</div>

                <p className="text-gray-400 text-lg mb-6">
                  We're building something amazing! The technical architecture documentation is coming soon.
                </p>

                <div className="flex items-center justify-center space-x-2 text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center text-sm text-gray-400">
              <p className="mb-2">
                Copyright DocumentDB a Series of LF Projects, LLC and its contributors
              </p>
              <p>
                For web site terms of use, trademark policy and other project policies please see{" "}
                <a 
                  href="https://lfprojects.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  https://lfprojects.org
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-orange-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border-2 border-blue-400 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 border-2 border-purple-400 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-3/4 left-1/3 w-8 h-8 border border-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Everything you need to build with DocumentDB - from getting started guides to deep architectural insights
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Documentation Grid - Updated to 2x2 layout with 25% larger blocks */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Getting Started */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => setCurrentPage('getting-started')}
            >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Getting Started with DocumentDB
                </h2>
              </div>
            </div>
          </div>

          {/* API Reference */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => setCurrentPage('api-reference')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  API Reference Docs
                </h2>
              </div>
            </div>
          </div>

          {/* PostgreSQL Extension API */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => setCurrentPage('postgres-api')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Postgres Extension API Docs
                </h2>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => setCurrentPage('architecture')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Architecture under the hood
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              Copyright DocumentDB a Series of LF Projects, LLC and its contributors
            </p>
            <p>
              For web site terms of use, trademark policy and other project policies please see{" "}
              <a 
                href="https://lfprojects.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                https://lfprojects.org
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}