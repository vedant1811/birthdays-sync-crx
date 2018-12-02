const BIRTHDAYS_URL = "https://www.facebook.com/events/birthdays/"

function main() {

  chrome.tabs.create({
    url: BIRTHDAYS_URL,
    active: false
  }, function (birthdaysTab) {
    chrome.tabs.executeScript(
      birthdaysTab.id,
      { file: 'onFacebookPage.js' },
      function callback(resultsArray) {
        console.log(resultsArray);
      }
    );
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  main();
});
