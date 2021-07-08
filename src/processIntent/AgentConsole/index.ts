import OpenOrSelectDashboard from "./OpenOrSelectDashboard";
import OpenColumn from "./OpenColumn";
import RefreshContent from "./RefreshContent";
import ColumnAction from "./ColumnAction";
import DashboardAction from "./DashboardAction";
import Search from "./Search";
import FilterByDate from "./FilterByDate";

export enum Intents {
  OpenAgentConsole = "AgentConsole.Open",
  OpenDashboard = "AgentConsole.OpenDashboard",
  OpenColumn = "AgentConsole.OpenColumn",
  Refresh = "Refresh",
  ColumnAction = "AgentConsole.ColumnAction",
  DashboardAction = "AgentConsole.DashboardAction",
  Search = "AgentConsole.Search",
  FilterByDate = "AgentConsole.FilterByDate",
}

export default {
  OpenOrSelectDashboard,
  OpenColumn,
  RefreshContent,
  ColumnAction,
  DashboardAction,
  Search,
  FilterByDate,
};
