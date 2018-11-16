const BIRTHDAYS_URL = "https://www.facebook.com/events/birthdays/"

console.log("yay 1");

function main() {
  console.log("yay");

  chrome.tabs.create({
    url: BIRTHDAYS_URL,
    active: false
  }, function (birthdaysTab) {
    chrome.tabs.executeScript(birthdaysTab.id)
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      console.log("yay 3");
      // make sure the status is 'complete' and it's the right tab
      if (tab.id == birthdaysTab.id && changeInfo.status == 'complete') {
        console.log("yay 2");
      }
    });
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  main();
});
