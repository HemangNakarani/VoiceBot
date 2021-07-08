import Open from './Open'
import CreateCampaign from './CreateCampaign'
import OpenMacroBuilder from './OpenMacroBuilder'
import Search from './Search'
import SetChannel from './SetChannel'
import SetEntity from './SetEntity'
import SetPeriod from './SetPeriod'

export enum Intents {
    Open = "AdsManager.Open",
    CreateCampaign = "AdsManager.CreateCampaign",
    OpenMacroBuilder = "AdsManager.BuildMacro",
    Search = "AdsManager.Search",
    SetChannel = "AdsManager.SetChannel",
    SetEntity = "AdsManager.SetEntity",
    SetPeriod = "AdsManager.SetPeriod",
}

export default{
    Open,
    CreateCampaign,
    OpenMacroBuilder,
    Search,
    SetChannel,
    SetEntity,
    SetPeriod
}