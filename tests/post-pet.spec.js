const { test, expect } = require('@playwright/test');

// [{id: 15, username: 'maria852', firstName: 'maria', lastName: 'silva', email: 'test@mail.com', password: 'test123', phone: '11985632850', userStatus: 1}]

const data = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('New Todo', () => {
  

  test('should allow create user by API request', async ({ request }) => {
    const newUser = await request.post(`/v2/user/createWithArray`, {data})

    expect(newUser.status()).toEqual(200)
    expect(newUser.statusText()).toEqual("OK")
    expect(await newUser.json()).toEqual({"code": 200, "message": "ok", "type": "unknown"})

  });

});





