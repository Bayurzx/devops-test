# OrgByte DevOps Test App

A simple Node.js Express API used for the OrgByte DevOps Engineer technical assessment.

## Endpoints

| Method | Path      | Description              |
|--------|-----------|--------------------------|
| GET    | /         | App info                 |
| GET    | /health   | Health check             |
| POST   | /echo     | Echoes back a message    |

## Running locally

```bash
npm install
npm start
# App runs on http://localhost:3000
```

## Running tests

```bash
npm install
npm test
```

## Health check

```bash
curl http://localhost:3000/health
```

Expected response:
```json
{
  "status": "ok",
  "service": "orgbyte-devops-test",
  "timestamp": "2025-04-21T10:00:00.000Z"
}
```

## Docker

```bash
docker build -t orgbyte-devops-test .
docker run -p 3000:3000 orgbyte-devops-test
```
