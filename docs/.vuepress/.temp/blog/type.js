export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-14b2ee8b","v-7630e300","v-69408533","v-e02a086e","v-2fe4ecaa","v-ae655e44","v-63cd5dba","v-517ba5ed","v-dc3b2a6e","v-77939808","v-744e35e2","v-6b5453d6","v-6a6f686c","v-59e244dd","v-66982182"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
