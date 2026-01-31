import request from 'supertest';
import { app } from '../index.js';
import fs from 'fs';

const version = fs.readFileSync('VERSION', 'utf8').trim();

describe('GET /version', () => {
    it('should return the correct version', async () => {
        const res = await request(app).get('/version');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual(version);
    });
});
