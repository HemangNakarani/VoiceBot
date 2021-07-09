export default function setDate(date:Date) {

    let milliseconds = date.getTime();
    let url = `https://champagne.sprinklr.com/marketing/planner/calendar/view/day?currentDate=${milliseconds}`;
    window.open(url, "SingleSecondaryWindowName");
  }