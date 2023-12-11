# Lisp Docs Usage

## Import

```typescript
import { ReferenceAid } from '@lisp-docs/utils';
```


## Usage

For the latest usage examples see [App](https://github.com/lisp-docs/lisp-docs-web-projects/blob/main/apps/lisp-docs-web-projects/src/app/app.tsx)

## Use

```typescript
<ReferenceAid>programmer</ReferenceAid>
```

`ReferenceAid` will provide a tooltip or reference if available for the string provided as a `child`.

`<DefinitionTooltips>` and `<ReferenceLink>` are also available in case only the tooltip or link is wanted respectively.

## Links

Please note because of issues with docusaurus the usage has changed:

To get a link do this:

```react
import { ReferenceAid, getLink } from '@lisp-docs/utils';
```

```react
<a href={getLink("programmer")}>
    <ReferenceAid>programmer</ReferenceAid  >
</a>
```