// 本地化檔案列表。

// Consts
const defaultTitle = 'Nginx 檔案伺服器'

/**
 * 更新內容。
 * 
 * @param selector 選擇器
 * @param to 變更成？
 */
function updateContent(selector, to) {
  for (let i of $$(selector)) i.innerHTML = to
}

if (typeof title !== 'undefined') updateContent('.theme-title', title)
  else updateContent('.theme-title', defaultTitle)
if (typeof titleTag !== 'undefined') updateContent('.theme-title-tag', titleTag)
    else updateContent('.theme-title-tag', defaultTitle)
if (typeof subtitle !== 'undefined') updateContent('.theme-subtitle', subtitle)
    else updateContent('.theme-subtitle', '')
if (typeof description !== 'undefined') updateContent('.theme-desc', description)
