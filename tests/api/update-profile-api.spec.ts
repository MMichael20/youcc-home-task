import { test, expect } from '@playwright/test';
import { apiContext } from '../../utils/api';

test('update gender via API', async () => {
    const api = await apiContext();
    const res = await api.get('/prod/users/profile');
    expect(res.ok()).toBeTruthy();
    expect(res.status()).toBe(200);
    const contentType = res.headers()['content-type'];
    expect(contentType).toContain('application/json');
    const profile = await res.json();
    profile.gender = 'Female';
    const updateRes = await api.put('/prod/users/profile', { data: profile });
    expect(updateRes.ok()).toBeTruthy();
    expect(updateRes.status()).toBe(200);
    const updateContentType = updateRes.headers()['content-type'];
    expect(updateContentType).toContain('application/json');
    const verifyRes = await api.get('/prod/users/profile');
    expect(verifyRes.ok()).toBeTruthy();
    expect(verifyRes.status()).toBe(200);
    const verifyContentType = verifyRes.headers()['content-type'];
    expect(verifyContentType).toContain('application/json');
    const updatedProfile = await verifyRes.json();
    expect(updatedProfile.gender).toBe('Female');
  });