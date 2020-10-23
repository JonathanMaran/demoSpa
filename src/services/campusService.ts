import { request } from '../utils/request';

export const signUp = (login: string, password: string) => request("/userscampus", {nickname: login, password}, "POST");
export const getAllUsers = () => request("/userscampus", undefined, "GET");
export const getAllConversations = () => request("/rooms", undefined, "GET");