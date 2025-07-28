# Guidelines for developers

This document contains guidelines that you, as a developer of this web site, should adhere to. However, you are allowed to go against the guidelines as long as you provide a good reason for it.

<details>

<summary>Avoid global styles</summary>

Global styles should be avoided because they often obfuscate how elements are being styled and since the same type of element may need to be styled differently on different parts of the site.

In cases where multiple elements need to have the same style, using [mixins](https://sass-lang.com/documentation/at-rules/mixin/) is better because you can immediately see when an element is styled by a mixin and since the mixin's name describes how it affects the element.

It is, however, preferable to use global styles in the following cases:

- If the affected element is declared outside of the SvelteKit body (i.e. in **app.html**).

</details>

<details>

<summary>Do not use legacy API</summary>

The [legacy API](https://svelte.dev/docs/svelte/legacy-overview) for Svelte should not be used for the simple reason that it is deprecated and will eventually be removed.

</details>

<details>

<summary>Follow naming conventions</summary>

Resources files (e.g. documents and images) should be named using snake case (e.g. **small_puppies.png**).

For the remaining files and identifiers, follow how other files and identifiers of the same type are named.

</details>
