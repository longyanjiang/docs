export const data = JSON.parse("{\"key\":\"v-6b5453d6\",\"path\":\"/vue/one.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"golang 第一篇\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://longyanjiang.github.io/docs/docs/vue/one.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"简明文档\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"vue/one.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
