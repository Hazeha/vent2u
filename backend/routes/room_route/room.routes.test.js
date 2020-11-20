/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../server');

describe('room route', () => {
  it('should get a room by id', async (done) => {
    await request(app)
      .get('/api/room/1')
      .then((response) => {
        const {
          id,
          name,
          location,
          open
        } = response.body;
        expect([
          id,
          name,
          location,
          open])
          .toEqual([
            1,
            'first room',
            2,
            false
          ]);
        done();
      });
  });

  it('should add a room', async (done) => {
    await request(app)
      .post(
        '/api/room/',
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

  it('should remove a room', async (done) => {
    await request(app)
      .post(
        '/api/room/',
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
          .delete(`/api/room/${id}`)
          .then((response) => {
            expect([response.status, response.body.id])
              .toEqual([200, id.toString()]);
            done();
          });
      });
  });
/*
  it('should get a preset by preset id', async (done) => { 
        await request(app)
          .get('/preset_specific/1')
          .then((response) => {
            const {
              id,
              temp,
              fan,
              light,
              seat,
              user_id,
            } = response.body;
            expect([
                id,
                temp,
                fan,
                light,
                seat,
                user_id
              ])
              .toEqual([
                1,
                1,
                1,
                1,
                1,
                1,
              ]);
            done();
          });
  })*/

  it('should update a preset', async (done) => {
      await request(app)
        .post(
          '/api/preset/',
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
            .put(`/api/preset/${id}`)
            .send({
               temp: 2,
                 fan: 3,
                 light: 4,
                 seat: 5,
                 user_id: 1,
            })
            .then((response) => {
              expect([response.status, response.body.message])
                .toEqual([200, 'Presets was updated successfully.']);
              done();
            });
        });
    });
});
