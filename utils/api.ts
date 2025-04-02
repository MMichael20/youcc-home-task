import { APIRequestContext, request } from "@playwright/test";
import { GetToken } from "./auth";
import { AppConfig } from "../config/app.config";

export async function apiContext(): Promise<APIRequestContext>{
    const token = await GetToken()
    return await request.newContext({
        baseURL: AppConfig.apiUrl,
        extraHTTPHeaders:{
            Authorization: `Bearer ${token}`
        }
    })
}