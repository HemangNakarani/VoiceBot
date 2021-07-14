const months = [
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

export function addDelay(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds);
  });
}

function requestAnimationFrameAsync() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });
}

export async function checkElement(selector: string) {
  let querySelector = null;
  while (querySelector === null) {
    await requestAnimationFrameAsync();
    querySelector = document.querySelector(selector);
  }
  return querySelector as HTMLElement;
}

export async function checkChildElement(
  selectorElement: HTMLElement,
  selector: string
) {
  let querySelector = null;
  while (querySelector === null) {
    await requestAnimationFrameAsync();
    querySelector = selectorElement.querySelector(selector);
  }
  return querySelector as HTMLElement;
}

export async function checkElements(selector: string) {
  let querySelector = null;
  while (querySelector === null || querySelector?.length === 0) {
    await requestAnimationFrameAsync();
    querySelector = document.querySelectorAll(selector);
  }

  return Array.from(querySelector) as HTMLElement[];
}

export function timeIn12HrFormat(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Check whether AM or PM
  var newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  let stringHours = hours < 10 ? "0" + hours : hours;
  let stringMinutes = minutes < 10 ? "0" + minutes : minutes;

  return stringHours + ":" + stringMinutes + " " + newformat;
}

export function dateInddMMMyyyyFormat(date: Date) {
  let day = date.getDate();
  let standardDay = day < 10 ? "0" + day : day;

  return (
    standardDay + " " + months[date.getMonth()] + ", " + date.getFullYear()
  );
}

export function dateInddMMMyyyyFormatAsArray(date: Date) {
  let day = date.getDate();
  let standardDay = day < 10 ? "0" + day : day;

  return [standardDay, months[date.getMonth()], date.getFullYear()];
}

export function convertTimeZone(date: Date) {
  return new Date(
    date.toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })
  );
}

export function getContext(): string {
  let host = window.location.host;
  let pathname = window.location.href;

  const calendar = new RegExp("/marketing/planner");
  const asset = new RegExp("/marketing/asset-manager");
  const care = new RegExp("/agent-console/");
  const ads = new RegExp("/advertising/manager");

  switch (true) {
    case calendar.test(pathname):
      return "editorial_calendar";

    case asset.test(pathname):
      return "asset_management";

    case care.test(pathname):
      return "Care_AgentConsole";

    case ads.test(pathname):
      return "ads_manager";

    default:
      return "";
  }
}

export function createContext(sessionID: string) {
  const current_active_context = getContext();
  if (current_active_context === "") {
    return [];
  }

  const contexts = [
    {
      name: `projects/voicebot-uxgb/agent/sessions/${sessionID}/contexts/${current_active_context}`,
      lifespanCount: 1,
    },
  ];
  return contexts;
}
