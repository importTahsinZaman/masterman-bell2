"use server";

import { cookies } from "next/headers";

export async function setAuth() {
  cookies().set({
    name: "auth",
    value: true,
  });
}

export async function getCookieExists(cookieName) {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has(cookieName);
  return hasCookie;
}

export async function getAuthorized() {
  return getCookieExists("auth");
}

export async function deleteCookie(cookieName) {
  cookies().delete(cookieName);
}
