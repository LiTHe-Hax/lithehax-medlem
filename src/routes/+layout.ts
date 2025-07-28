import { PUBLIC_BASE_URL } from "$env/static/public";
import type { LayoutLoadEvent } from "./$types";

export const prerender = true; // Needed since we're using adapter-static

export function load({ url }: LayoutLoadEvent) {
	return {
		canonicalHref: `${PUBLIC_BASE_URL}${url.pathname}`,
	};
}
