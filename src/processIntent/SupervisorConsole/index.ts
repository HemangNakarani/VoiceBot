import Open from "./Open";
import AgentStatus from "./AgentStatus";
import OpenAgentActivity from "./AgentActivity";

export enum Intents {
  Open = "SupervisorConsole.Open",
  SelectAgentStatus = "SupervisorConsole.AgentStatus",
  AgentActivity = "SupervisorConsole.AgentActivity",
}

export default {
  Open,
  AgentStatus,
  OpenAgentActivity,
};
