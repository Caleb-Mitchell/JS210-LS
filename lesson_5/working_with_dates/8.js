function dateSuffix(dayNum) {
  let lastDigit = dayNum % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function formattedMonth(date) {
  let month = date.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[month];
}

function formattedDay(date) {
  let weekDay = date.getDay();
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return daysOfWeek[weekDay];
}

function formattedDate() {
  let today = new Date();
  let dayNum = today.getDate();

  console.log(
    `Today's date is ${formattedDay(today)}, ${formattedMonth(
      today
    )} ${dayNum}${dateSuffix(dayNum)}`
  );
}

formattedDate();
