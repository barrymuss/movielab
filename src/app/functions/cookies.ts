"use server";
import { cookies } from "next/headers";

export async function setCookies(data: string) {
	cookies().set("Token", data);
}

export async function hasCookies(data: any) {
	cookies().has(data);
}

export async function getCookies(data: string) {
	const cookieStore = cookies();
	const token = cookieStore.get(data);
	return token;
}

export async function deleteCookies(data: string) {
	cookies().delete(data);
}
