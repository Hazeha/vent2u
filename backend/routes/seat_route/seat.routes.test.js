/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../server');

describe('seat route', () => {
  it('should get a seat by id', async (done) => {
    await request(app)
      .get('/api/seat/1')
      .then((response) => {
        const {
          id,
          room,
          position,
          temp,
          fan,
          user_id,
        } = response.body[0];
        expect([
          id,
          room,
          position,
          temp,
          fan,
          user_id])
          .toEqual([
            1,
            "1",
            "1",
            "60",
            "1",
            "1",
          ]);
        done();
      });
  });

  it('should add a seat', async (done) => {
    await request(app)
      .post(
        '/api/seat/',
      )
      .send(
        {
          temp: 1,
          fan: 1,
          light: 1,
          seat: 1,
          user_id: 1,
        },
      )
      .then((response) => {
        expect(
          response.status,
        ).toEqual(
          201,
        );
        done();
      });
  });

  it('should remove a seat', async (done) => {
    await request(app)
      .post(
        '/api/seat/',
      )
      .send(
        {
          temp: 1,
          fan: 1,
          light: 1,
          seat: 1,
          user_id: 1,
        }
      )
      .then((response) => {
        const { id } = response.body;
        request(app)
          .delete(`/api/seat/${id}`)
          .then((response) => {
            expect([response.status, response.body.id])
              .toEqual([200, id.toString()]);
            done();
          });
      });
  });

  it('should remove a seat', async (done) => {
      await request(app)
        .post(
          '/api/seat/',
        )
        .send({
          temp: 1,
          fan: 1,
          light: 1,
          seat: 1,
          user_id: 1,
        })
        .then((response) => {
          const {
            id
          } = response.body;
          request(app)
            .put(`/api/seat/${id}`)
            .send({
               temp: 2,
                 fan: 3,
                 light: 4,
                 seat: 5,
                 user_id: 1,
            })
            .then((response) => {
              expect([response.status, response.body.message])
                .toEqual([200, 'Seat was updated successfully.']);
              done();
            });
        });
    });
});
