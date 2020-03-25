function calcSeconds() {
  function checkForLeapYear(year) {
    return year % 4 === 0;
  }
  let seconds;
  const year = prompt("Enter Year 4 digits");
  const isLeapYear = checkForLeapYear(year);
  if (isLeapYear) {
    seconds = 60 * 60 * 24 * 365;
  } else {
    seconds = 60 * 60 * 24 * 366;
  }
  alert(` ${year} has ${seconds} seconds`);
}
calcSeconds();
