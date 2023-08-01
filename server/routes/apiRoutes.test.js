const assert = require("assert");
const expect = require("chai").expect;
const mongoose = require("mongoose");
const request = require("supertest");

require("dotenv").config();

const app = require("./index");

beforeEach(async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.7af89nh.mongodb.net/`
  );
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("Unit testing to getDoctors", () => {
  it("should return OK status", async () => {
    return request(app)
      .get("/api/v1/doctors/all?20")
      .then((res) => {
        assert.equal(res.status, 200);
      });
  });
  it("Should return all doctors in db", () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.text).to.contain(
          "GÜVENLİĞİN VE KALİTENİN ADRESİ ÇNR GRUP'a HOŞGELDİNİZ!"
        );
      });
  });
});
