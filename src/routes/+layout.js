// This is needed, since the website is using adapter-static
export const prerender = true;

export function load({ url }) {
  const canonicalHref = `${__BASE_URL__}${url.pathname}`;
  return { canonicalHref };
}
