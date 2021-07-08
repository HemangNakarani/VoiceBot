import Open from './Open'
import AddContent from './AddContent'
import Search from './Search'
import SetChannels from './SetChannels'
import SetDate from './SetDate'
import SetPeriod from './SetPeriod'
import SetStatus from './SetStatus'
import SetView from './SetView'

export enum Intents {
    Open = "EditorialCalendar.Open",
    SetChannel = "EditorialCalendar.SetChannel",
    SetStatus = "EditorialCalendar.SetStatus",
    SetDate = "EditorialCalendar.SetDate",
    SetPeriod = "EditorialCalendar.SetPeriod",
    SetView = "EditorialCalendar.SetView",
    Search = "EditorialCalendar.Search",
    AddContent = "EditorialCalendar.AddContent",

}

export default{
    Open,
    AddContent,
    Search,
    SetChannels,
    SetDate,
    SetPeriod,
    SetStatus,
    SetView
}
  