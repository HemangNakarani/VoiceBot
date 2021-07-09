export default function open() {
    let milliseconds = Date.now();
    let url = `https://champagne.sprinklr.com/marketing/planner/calendar/view/day?currentDate=${milliseconds}`;
    window.open(url, "SingleSecondaryWindowName");
  }