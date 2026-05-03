'use strict';

const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint — candidates must deploy and curl this
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'orgbyte-devops-test',
    timestamp: new Date().toISOString(),
  });
});

// Simple greeting endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'OrgByte DevOps Test App',
    version: '1.0.0',
  });
});

// Echo endpoint — useful for smoke tests
app.post('/echo', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'message field is required' });
  }
  res.status(200).json({ echo: message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
