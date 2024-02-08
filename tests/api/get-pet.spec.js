const { test, expect } = require('@playwright/test');

const data = [{id: 25, username: 'mariaget', firstName: 'maria', lastName: 'silva', email: 'test@mail.com', password: 'test123', phone: '11985632850', userStatus: 1}]


test.describe('New Todo', () => {
  test('should allow consult user by API reques', async ({ request }) => {
    
    await request.post(`/v2/user/createWithArray`, {data})
    
    const listUser = await request.get(`/v2/user/${data[0].username}`)

    const body = await listUser.json()
    expect([body]).toEqual(data)
  });
});





