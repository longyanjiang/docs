export const siteData = JSON.parse("{\"base\":\"/docs/\",\"lang\":\"zh-CN\",\"title\":\"简明文档\",\"description\":\"Snine的笔记、中文文档、前端文档、后端文档、学习资料、随笔、日常问题。\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
