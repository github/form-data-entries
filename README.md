# FormData.entries ponyfill

This [ponyfill](https://ponyfill.com/) implements the `FormData` serialization algorithm. It aims to be compatible with calling the native `new FormData(form).entries()`. [jQuery's `serializeArray`](https://api.jquery.com/serializeArray/) is another implementation example.

## Usage

```js
import formDataEntries from 'form-data-entries'

for (const [name, value] of formDataEntries(myForm)) {
  console.log(`${name}=${value}`)
}
```

## Why ponyfill?

This package implements `FormData.entries` as a module [ponyfill](https://ponyfill.com/) rather than a polyfill. `FormData.entries` was a later addition to the `FormData` specification. Therefore browsers may support `FormData` but not the `entries` method. It would be dangerous to attempt to fill just this additional `entries` method in browsers that have partial support. This module only implements `entries` as a standalone function which will even work in browsers with no `FormData` support.

However, once `FormData.entries` is widely supported this package should be considered obsolete.

## Undefined Behavior

This module makes a best effort to match the behavior of native `FormData.entries`. It should be possible in the future to replace calls to `formDataEntries(form)` with `new FormData(form).entries()`. However, there are some cases where this module can not fully match the native behavior. If the form contains any `<input type=file>` elements, the behavior is considered undefined and should not be relied upon.

## Test Suite

* [Run test suite against ponyfill implementation](https://github.github.com/form-data-entries/test/test-ponyfill.html)
* [Run test suite against browser's native implementation](https://github.github.com/form-data-entries/test/test-native.html)
