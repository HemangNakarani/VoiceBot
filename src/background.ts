chrome.browserAction.onClicked.addListener(function () {
  console.log("Hello From BackGround !!!");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTab: chrome.tabs.Tab = tabs[0];
    let tabId = Number(activeTab.id);

    chrome.tabs.sendMessage(tabId, {
      message: "BROWSER_ACTION_CLICKED",
    });
  });
});

chrome.omnibox.onInputEntered.addListener(function (text) {
  if (text === "open") {
    chrome.tabs.create({ url: "https://champagne.sprinklr.com" });
  }
});


chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.type === "OPEN_WEBSITE_SETTINGS") {
    chrome.tabs.create({
      url: "chrome://settings/content/siteDetails?site=https://champagne.sprinklr.com",
    });
  }
});

export {};
