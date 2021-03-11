const supertest = require('supertest')
const app = require('../server')
const mysql = require("mysql");
const dbConfig = require("../app/config/db.config");

test("GET /search", async () => {
  let uri = `/search/?apikey=ab21a078&s=Avenger&y=2011&page=1`
  await supertest(app).get(uri)
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body.Search)).toBeTruthy();
      expect(response.body.Search[0].Title).toBeTruthy();
    });
});

test("GET /search without api key", async () => {
  let uri = `/search/?s=Avenger&y=2011&page=1`
  await supertest(app).get(uri)
    .expect(401)
    .then((response) => {
    });
});

test("GET /detail", async () => {
  let uri = `/detail/?apikey=ab21a078&t=Avenger&y=2011`
  await supertest(app).get(uri)
    .expect(200)
    .then((response) => {
      expect(typeof(response.body)).toBe('object')
      expect(response.body.Title).toBeTruthy();
    });
});

test("GET /detail without api key", async () => {
  let uri = `/detail/?t=Avenger&y=2011`
  await supertest(app).get(uri)
    .expect(401)
    .then((response) => {
    });
});

test("GET /loggers", async () => {
  let uri = `/loggers`
  await supertest(app).get(uri)
    .expect(200)
    .then((response) => {
      expect(response.body.length).toBeGreaterThan(0)
      expect(response.body[0]).toHaveProperty('id')
      expect(response.body[0]).toHaveProperty('datetime')
      expect(response.body[0]).toHaveProperty('param')
      expect(response.body[0]).toHaveProperty('endpoint')
    });
})