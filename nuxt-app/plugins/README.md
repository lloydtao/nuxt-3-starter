# Layouts Directory

Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

Layouts are placed in the `layouts/` directory and will be automatically loaded via asynchronous import when used. Layouts are used by adding `<NuxtLayout>` to your `app.vue`, and either setting a `layout` property as part of your page metadata (if you are using the `~/pages` integration), or by manually specifying it as a prop to `<NuxtLayout>`. (**Note**: The layout name is normalized to kebab-case, so `someLayout` becomes `some-layout`.)

If you only have a single layout in your application, we recommend using [app.vue](/docs/guide/directory-structure/app) instead.

::alert{type=warning}
Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a `<slot />`.
::

## Enabling the Default Layout

Add a `~/layouts/default.vue`:

```vue [layouts/default.vue]
<template>
  <div>
    Some default layout shared across all pages
    <slot />
  </div>
</template>
```

In a layout file, the content of the layout will be loaded in the `<slot />`, rather than using a special component.

If you use a `app.vue` you will also need to add `<NuxtLayout>`:

```vue [app.vue]
<template>
  <NuxtLayout> some page content </NuxtLayout>
</template>
```

## Setting Another Layout

```bash
-| layouts/
---| default.vue
---| custom.vue
```

You can directly override the default layout like this:

```vue{}[app.vue]
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>
```

Alternatively, you can override the default layout per-page like this:

::code-group

```vue{}[pages/index.vue]
<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});
</script>
```

```vue{}[app.vue]
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

```vue [layouts/custom.vue]
<template>
  <div>
    Some *custom* layout
    <slot />
  </div>
</template>
```

```vue [layouts/default.vue]
<template>
  <div>
    A *default* layout
    <slot />
  </div>
</template>
```

::

::alert{type=info}
Learn more about [defining page meta](/docs/guide/directory-structure/pages#page-metadata).
::
