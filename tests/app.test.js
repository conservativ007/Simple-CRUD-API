import request from 'supertest';
import { server } from '../src/app';
import { randomUUID } from 'node:crypto';

const user = {
  username: 'Maks',
  age: 27,
  hobbies: [],
};

const changedUser = {
  username: 'Maks',
  age: 28,
  hobbies: ['web develop'],
};

let USER_ID = '';

const URL = '/api/users';

describe('api users', () => {
  it('GET /api/users ---> empty aray', () => {
    return request(server)
      .get(URL)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual(expect.arrayContaining([]));
      });
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

        USER_ID = response.body.id;
      });
  });
  it('GET /api/users/id ---> user', () => {
    return request(server)
      .get(`${URL}/${USER_ID}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual(expect.objectContaining(user));
      });
  });
  it('PUT /api/users/id ---> changed user', () => {
    return request(server)
      .put(`${URL}/${USER_ID}`)
      .send(changedUser)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body).toEqual(expect.objectContaining(changedUser));
      });
  });
  it('DELETE /api/users/id ---> user deleted', () => {
    return request(server)
      .delete(`${URL}/${USER_ID}`)
      .expect(204)
      .then((response) => {
        expect(response.header.user).toBe('user was successfully deleted');
      });
  });
  it('GET /api/users/id ---> user not found', () => {
    return request(server).get(`${URL}/${USER_ID}`).expect(404);
  });

  it('GET /api/users/999999 ---> 400 invalid uuid', () => {
    return request(server).get(`${URL}/999999`).expect(400);
  });
});
