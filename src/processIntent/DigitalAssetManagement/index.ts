import AddAssets from "./AddAsset";
import SortAssets from "./SortAssets";
import ChangeViewOfAssets from "./ChangeViewOfAssets";
import FilterAssets from "./FilterAssets";
import SearchAssets from "./SearchAssets";

export enum Intents {
  OpenAssetPage = "Marketing.Asset",
  FilterAsset = "Asset.Filter",
  SortAsset = "Asset.Sort",
  AssetsView = "SetView",
  AddAsset = "Asset.Add",
  SearchAssets = "Asset.Search",
}

export default {
  AddAssets,
  SortAssets,
  ChangeViewOfAssets,
  FilterAssets,
  SearchAssets,
};
