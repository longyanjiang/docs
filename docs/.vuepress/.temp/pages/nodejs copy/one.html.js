export const data = JSON.parse("{\"key\":\"v-09e6564e\",\"path\":\"/nodejs%20copy/one.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"nodejs第一篇\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/nodejs%20copy/one.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"文档中心\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"nodejs copy/one.md\"}")

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
