export const data = JSON.parse("{\"key\":\"v-45d35dac\",\"path\":\"/html/demo/demo001.html\",\"title\":\"第一个demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"第一个demo\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://longyanjiang.github.io/docs/docs/html/demo/demo001.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"简明文档\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"第一个demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"html/demo/demo001.md\"}")

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
