const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return hello message", async () => {
    const res = await request(app);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello DevOps World 🚀");
  });
});