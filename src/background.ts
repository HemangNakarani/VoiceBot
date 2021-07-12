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

chrome.omnibox.onInputEntered.addListener(function (text, suggest) {
  switch (text) {
    case "open": {
      chrome.tabs.create({ url: "https://champagne.sprinklr.com" });
      break;
    }
    case "help": {
      chrome.tabs.create({
        url: `chrome-extension://${chrome.runtime.id}/options.html`,
      });
      break;
    }
    default: {
      console.log("Nothig Matched");
    }
  }
  return;
});

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
  suggest([
    { content: "open", description: "Open Sprinklr Website" },
    { content: "help", description: "Open Options Page" },
  ]);
});

// Open Options Page as Help Page on First Time and Also can be Visited via Options
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({
      url: `chrome-extension://${chrome.runtime.id}/options.html`,
    });
  } else if (details.reason === "update") {
    console.log("Updated");
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
