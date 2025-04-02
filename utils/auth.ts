import { readFile } from 'fs/promises';

export async function GetToken(): Promise<string> {
  const data = JSON.parse(await readFile('data/storageState.json', 'utf8'));
  const tokenItem = data.origins[0]?.localStorage.find((item: any) => item.name === 'token');
  if (!tokenItem || !tokenItem.value) throw new Error("Token not found");
  return tokenItem.value;
}