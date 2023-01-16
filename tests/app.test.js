import request from 'supertest';
import { server } from '../src/app';
import { randomUUID } from 'node:crypto';

const user = {
  username: 'Maks',
  age: 27,
  hobbies: [],
};

const URL = '/api/users';

describe('api users', () => {
  it('GET /api/users ---> aray of users', () => {
    return request(server).get(URL).expect(200).expect('Content-Type', /json/);
  });
  it('POST /api/users ---> user', () => {
    return request(server)
      .post(URL)
      .send(user)
      .expect(201)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            ...user,
          })
        );
      });
  });
  it('GET /api/users/999999 ---> 400 invalid uuid', () => {
    return request(server).get(`${URL}/999999`).expect(400);
  });
  it(`GET /api/users/wrong valid uuid ---> 404 user not found`, () => {
    return request(server).get(`${URL}/${randomUUID()}`).expect(404);
  });
});
