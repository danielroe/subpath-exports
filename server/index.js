const { loadNuxt } = require('nuxt')

async function init() {
  // Assuming you've already built your project
  const nuxt = await loadNuxt({ for: 'start' })
  await nuxt.listen(3000)
  const window = await nuxt.renderAndGetWindow('http://localhost:3000')
  // Display the head `<title>`
  console.log(window.document.title)
  nuxt.close()
}

init()
