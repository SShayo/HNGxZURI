// Get the current day of the week.
const dayOfWeek = new Date().toLocaleDateString("en-UK", { weekday: "long" });

// Get the current UTC time in milliseconds.
const utcTime = new Date().getTime();

// Update the DOM with the current day of the week and UTC time.
document.querySelector("[data-testid='currentDayOfTheWeek']").innerHTML = `Current Day of the Week: ${dayOfWeek}`;
document.querySelector("[data-testid='currentUTCTime']").innerHTML = `Current UTC Time: ${utcTime}`;
