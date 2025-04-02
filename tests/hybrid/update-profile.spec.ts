import { test, expect } from '@playwright/test';
import { apiContext } from '../../utils/api';
import { ProfilePage } from '../../pages/ProfilePage';

test('update hobby via API', async () => {
  const api = await apiContext();
  const res = await api.get('/prod/users/profile');
  expect(res.ok()).toBeTruthy();
  expect(res.status()).toBe(200);
  const contentType = res.headers()['content-type'];
  expect(contentType).toContain('application/json');
  const profile = await res.json();

  profile.hobby = 'Video Games';

  const updateRes = await api.put('/prod/users/profile', { data: profile });
  expect(updateRes.ok()).toBeTruthy();
  expect(updateRes.status()).toBe(200);
  const updateContentType = updateRes.headers()['content-type'];
  expect(updateContentType).toContain('application/json');
});

test('Validate the change in the UI', async ({ page }) => {
  const profilePage = new ProfilePage(page);
  await profilePage.goto();
  const hobby = await profilePage.getHobby();
  expect(hobby.toLowerCase()).toContain('video games');
});
