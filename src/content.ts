const link = document.createElement("link")
link.rel = "stylesheet"
link.href = chrome.runtime.getURL("theme.css")
document.head.appendChild(link)

// function handle() {}

// const observer = new MutationObserver(handle)

// observer.observe(document.body, { childList: true, subtree: true })
