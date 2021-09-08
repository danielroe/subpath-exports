import { main, subpath } from './a'

// This works fine with a version of node that supports subpath exports
console.log({ main: main(), subpath: subpath() })

export default {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
};
