let taskManagerEntryButton = document.getElementById(
  "task-manager-entry-button"
);
let classManagerEntryButton = document.getElementById(
  "class-manager-entry-button"
);
let dailyJournalEntryButton = document.getElementById(
  "daily-journal-entry-button"
);
let questSystemEntryButton = document.getElementById(
  "quest-system-entry-button"
);
let weatherTodayEntryButton = document.getElementById(
  "weather-today-entry-button"
);
let mtgCloneEntryButton = document.getElementById(
  "MTG-clone-entry-button"
);
let bookShopEntryButton = document.getElementById(
  "book-shop-entry-button"
);

taskManagerEntryButton?.addEventListener("click", () => {
  window.location.href = "http://localhost:5000/taskManager/index.html";
});
classManagerEntryButton?.addEventListener("click", () => {
    window.location.href = "http://localhost:5000/classManagement/index.html";
  });
dailyJournalEntryButton?.addEventListener("click", () => {
  window.location.href = "http://localhost:5000/dailyJournal/index.html";
});
questSystemEntryButton?.addEventListener("click", () => {
  window.location.href = "http://localhost:5000/questSystem/index.html";
});
weatherTodayEntryButton?.addEventListener("click", () => {
  window.location.href = "http://localhost:5000/WeatherToday/index.html";
});
mtgCloneEntryButton?.addEventListener("click", () => {
  window.location.href = "http://localhost:5000/MTGclone/index.html";
});
bookShopEntryButton?.addEventListener("click", () => {
  window.location.href = "http://localhost:5000/BookShop/index.html";
});

//tsc --module es6 ./public/index.ts