const app = require('../app');
const request = require("supertest");
const agent = request(app);
require('dotenv').config();
const { DB_URI } = process.env;
const mongoose = require('mongoose')


describe("Back-End Routing Test", () => {
  // The solution was connect the DB before and close the connection after all the test :D
  beforeAll(async()=>{
    await mongoose.connect(DB_URI);
  })
  afterAll(async()=>{
    await mongoose.connection.close();
  })
  describe("GET /users", () =>{
    it("Reply with status: 200.", async () => {
      const response = await agent.get('/users').expect(200)
    });
  })
  describe('POST /user', () => {
    it('Post (userCreateController)', async() => {
        const userTest = {
            "name":"pepvbncjxkzito",
            "lastName":"pbvzfgdhjsaghjkcxcbvzx",
            "adress":"asdasdacxz<sda",
            "city":10,
            "natinality":10,
            "module":[],
            "role":1,
             "progress":10,
             "status":true,
             "profile_img":"asdcxz<asdasd",
             "email":"manu07x@hotmail.cxz<cxcom",
             "password":"12322456"
        }
        await agent
            .post('/user')
            .send(userTest)
            .expect(200)
            .expect('Content-Type', /application\/json/);
    })
  })
});

// it("should handle errors and return a 400 status code", async () => {
//   const response = await request(server).get("/users");
//   expect(response.status).toBe(400);
//   expect(response.body).toHaveProperty("error");
// });
