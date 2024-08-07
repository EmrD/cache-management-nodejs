# Cache-NodeJS

This project is a basic Node.js API example using Express and NodeCache for caching responses and measuring response times.

## Features

- **Caching:** Caches server responses and serves them quickly from the cache.
- **Response Time Measurement:** Measures the time taken for each response from the server.

## Installation

Steps to set up and run the project:

1. **Clone the repository:**
    ```sh
    git clone <REPO_URL>
    cd <FOLDER_NAME>
    ```

2. **Install the required dependencies:**
    ```sh
    npm install
    ```

3. **Start the server:**
    ```sh
    node index.js
    ```

## Usage

Once the server is running, you can test the API using the following URL:

- **Data Request:** `GET http://localhost:3000/data`

    ```sh
    curl http://localhost:3000/data
    ```

    Example response (from server):
    ```json
    {
      "message": "This data is coming from the server",
      "timestamp": "2024-08-07T10:32:43.379Z",
      "cache": false,
      "responseTime": 1
    }
    ```

    Example response (from cache):
    ```json
    {
      "message": "This data is coming from the server",
      "timestamp": "2024-08-07T10:32:43.379Z",
      "cache": true,
      "responseTime": 0
    }
    ```

## Middlewares

### checkCache

This middleware checks if the incoming request is present in the cache. If found, it returns the response from the cache; otherwise, it moves to the next middleware.

### measureResponseTime

This middleware measures the response time for each request and adds it to the response object.

## Contributing

Feel free to submit a pull request or open an issue to contribute to this project. Contributions are welcome.
