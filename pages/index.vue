<template>
  <div>
    Reproduction
  </div>
</template>

<script>
// This fails entirely (wp4 doesn't support subpath exports)
import { main, subpath } from './a'

console.log({ main: main(), subpath: subpath() })

export default {}
</script>
