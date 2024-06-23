import {
  China,
  Czech,
  France,
  Germany,
  Italy,
  Japan,
  Poland,
  Sweden,
  UK,
  USA,
  USSR,
} from "components/icons";

export enum Nations {
  ussr = "ussr",
  usa = "usa",
  germany = "germany",
  uk = "uk",
  japan = "japan",
  china = "china",
  france = "france",
  sweden = "sweden",
  italy = "italy",
  poland = "poland",
  czech = "czech",
}

export const NationsOptions = Object.entries(Nations).map(([value, label]) => ({
  label: label.toUpperCase(),
  value,
}));

export const NationsIcons = {
  [Nations.ussr]: USSR,
  [Nations.usa]: USA,
  [Nations.germany]: Germany,
  [Nations.uk]: UK,
  [Nations.japan]: Japan,
  [Nations.china]: China,
  [Nations.france]: France,
  [Nations.sweden]: Sweden,
  [Nations.italy]: Italy,
  [Nations.poland]: Poland,
  [Nations.czech]: Czech,
};
