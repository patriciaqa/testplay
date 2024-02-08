const { test, expect } = require('@playwright/test');

const data = JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe('New Todo', () => {
  test('should allow consult user by API request', async ({ request }) => {
    
    await request.post(`/v2/user/createWithArray`, {data})
    
    const listUser = await request.get(`/v2/user/${data[0].username}`)

    const body = await listUser.json()
    expect([body]).toEqual(data)
  });
});





