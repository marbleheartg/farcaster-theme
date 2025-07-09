chrome.runtime.onInstalled.addListener(() => {
  console.log("🚀 Extension installed!")
})

chrome.action.onClicked.addListener(tab => {
  console.log("🖱️ Extension icon clicked", tab)

  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ["content.js"],
  })
})
