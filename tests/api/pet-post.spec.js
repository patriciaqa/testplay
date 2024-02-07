const { test, expect } = require('@playwright/test');

const data = [{id: 15, username: 'maria852', firstName: 'maria', lastName: 'silva', email: 'test@mail.com', password: 'test123', phone: '11985632850', userStatus: 1}]


test.describe.only('New Todo', () => {
  test('should allow create user by API request', async ({ request }) => {
    const newUser = await request.post(`/v2/user/createWithArray`, {data})

    expect(newUser.status()).toEqual(200)
    expect(newUser.statusText()).toEqual("OK")
    expect(await newUser.json()).toEqual({"code": 200, "message": "ok", "type": "unknown"})

  });

  test('should allow consult user by API reques', async ({ request }) => {

    const listUser = await request.get(`/v2/user/${data[0].username}`)

    const body = await listUser.json()

    expect(listUser.status()).toEqual(200)
    expect([body]).toEqual(data)
  });
});


//TODO
// finalizar automação POST mais um endpoint

// teste automotizado de mobile nativo
// webdriverio


