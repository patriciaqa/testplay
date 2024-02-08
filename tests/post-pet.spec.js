const { test, expect } = require('@playwright/test');

// Importing test data directly
const data = require("../testdata.json")

test.describe('New Todo', () => {
  
  test('should allow create user by API request', async ({ request }) => {
    const newUser = await request.post(`/v2/user/createWithArray`, {data})
    // Asserting response status
    expect(newUser.status()).toBe(200)
    // Asserting response status text
    expect(newUser.statusText()).toBe('OK')
    // Parsing and asserting response JSON
    expect(await newUser.json()).toEqual({code: 200, message: 'ok', type: 'unknown'})
  });

});





