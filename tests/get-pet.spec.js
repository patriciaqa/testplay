const { test, expect } = require('@playwright/test');

// Importing test data directly
const data = require("../testdata.json")

test.describe('New Todo', () => {

  test('should allow consult user by API request', async ({ request }) => {

    // Create a new user
    await request.post(`/v2/user/createWithArray`, {data})
    // Get the details of the user created
    const listUser = await request.get(`/v2/user/${data[0].username}`)
    // Parse response body to JSON
    const body = await listUser.json()
    // Assert that the response body matches the test data
    expect([body]).toEqual(data)

    await request.delete(`/v2/user/${data[0].username}`)
  });

  test('should consult inexistent user by API request', async ({ request }) => {

    // Get the details of the user created
    const listUser = await request.get(`/v2/user/${data[0].username}`)
    // Asserting response status
    expect(listUser.status()).toBe(404)
    // Asserting response status text
    expect(listUser.statusText()).toBe('Not Found')
  });
  
});





