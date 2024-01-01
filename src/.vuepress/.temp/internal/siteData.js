export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/en-us/\":{\"lang\":\"en-US\",\"title\":\"Lit Tutorial\",\"description\":\"A Tutorial For Lit Beginners\"},\"/zh-cn/\":{\"lang\":\"zh-CN\",\"title\":\"Lit 新手教程\",\"description\":\"Lit 初学者的新手教程\"}}}")

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
