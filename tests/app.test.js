'use strict';

const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('should return 200 with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.service).toBe('orgbyte-devops-test');
    expect(res.body.timestamp).toBeDefined();
  });
});

describe('GET /', () => {
  it('should return 200 with app info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('OrgByte DevOps Test App');
    expect(res.body.version).toBe('1.0.0');
  });
});

describe('POST /echo', () => {
  it('should echo the message back', async () => {
    const res = await request(app)
      .post('/echo')
      .send({ message: 'hello orgbyte' });
    expect(res.statusCode).toBe(200);
    expect(res.body.echo).toBe('hello orgbyte');
  });

  it('should return 400 when message is missing', async () => {
    const res = await request(app).post('/echo').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});

describe('GET /unknown', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toBe(404);
  });
});
