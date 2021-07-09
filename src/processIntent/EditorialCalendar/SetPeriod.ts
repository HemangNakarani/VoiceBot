export default function setPeriod(startDate:Number,days: Number) {
    
    let view = "";
    switch (true) {
      case days == 0 || days == 1:
        view = "day";
        break;

      case days == 7:
        view = "week";
        break;

      case days >= 28 && days <= 31:
        view = "month";
        break;

      case days == 365 || days == 366:
        view = "year";
        break;

      default:
        view = "day";
        startDate = Date.now();
    }

    let url = `https://champagne.sprinklr.com/marketing/planner/calendar/view/${view}?currentDate=${startDate}`;
    window.open(url, "SingleSecondaryWindowName");
  }