// 本地化檔案列表。

// $$(ele) => document.querySelectorAll(ele)
const $$ = ele => document.querySelectorAll(ele)

/**
 * 本地化字串。
 * 
 * @param {HTMLElement} raw 原始 element
 * @param {RegExp} match 符合正規表示式，必須在要本地化的字串前後加上 `()`
 * (如前/後方可能有內容，請改成 `(.*)` 或 `(.+)`)
 * @param {string} localizedString 要改成哪個字串？
 * @param {string} prefix 前綴
 * @param {string} suffix 後綴
 * @return {?} 成功回傳本地化後的字串，失敗則回傳 null。
 */
function l10n(raw, match, localizedString, prefix = '', suffix = '') {
  const m = raw.innerHTML.match(match)
  if (!m) return null
  raw.innerHTML = m[1] + localizedString + m[2]
  return raw.innerHTML
}

for (let i of $$('#list > thead > tr > th')) {
  if (l10n(i, /(.*)File Name(.*)/, '檔名')) continue
  if (l10n(i, /(.*)File Size(.*)/, '檔案大小')) continue
  if (l10n(i, /(.*)Date(.*)/, '日期')) continue
}

for (let i of $$('.link > a')) {
  if (l10n(i, /^()Parent directory\/()$/, '上層目錄/')) continue
}
