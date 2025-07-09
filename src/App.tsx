import clsx from "clsx"

export function App() {
  return (
    <div className={clsx("flex flex-col gap-5")}>
      <h1 className={clsx("text-base")}>Farcaster Theme</h1>
      <div
        className={clsx("cursor-pointer")}
        onClick={() => {
          // chrome.storage.sync.set({ themeColor: "pink" }, () => {
          //   console.log("color saved")
          //   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
          //     const tab = tabs[0]
          //     if (tab.id) {
          //       chrome.scripting.executeScript({
          //         target: { tabId: tab.id },
          //         func: xpaths => {
          //           for (const xpath of xpaths) {
          //             const result = document.evaluate(
          //               xpath,
          //               document,
          //               null,
          //               XPathResult.ORDERED_NODE_ITERATOR_TYPE,
          //               null,
          //             )
          //             let node = result.iterateNext()
          //             while (node) {
          //               if (node instanceof HTMLElement) {
          //                 node.style.backgroundColor = "pink"
          //               }
          //               node = result.iterateNext()
          //             }
          //           }
          //         },
          //         args: [xpaths],
          //       })
          //     }
          //   })
          // })
        }}
      >
        Click
      </div>
    </div>
  )
}

export default App

// onClick={() => {
// chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//   const tab = tabs[0]
//   if (tab.id) {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: xpath => {
//         const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
//         const node = result.singleNodeValue
//         if (node instanceof HTMLElement) node.style.backgroundColor = "pink"
//       },
//       args: [`//*[@id="root"]/div[2]/div/main/div/div/nav/div[1]`],
//     })
//   }
// })
// }}
