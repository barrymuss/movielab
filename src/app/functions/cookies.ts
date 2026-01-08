"use server";
import { cookies } from "next/headers";

export async function setCookies(data: string) {
	const cookieStore = await cookies();
	cookieStore.set("Token", data);
}

export async function hasCookies(data: any) {
	const cookieStore = await cookies();
	return cookieStore.has(data);
}

export async function getCookies(data: string) {
	const cookieStore = await cookies();
	const token = cookieStore.get(data);
	return token;
}

export async function deleteCookies(data: string) {
	const cookieStore = await cookies();
	cookieStore.delete(data);
}
