import {
  ATSPGTank,
  HeavyTank,
  LightTank,
  MediumTank,
  SPGTank,
} from "components/icons";

export const TanksTypes = {
  heavyTank: "heavyTank",
  "AT-SPG": "AT-SPG",
  mediumTank: "mediumTank",
  lightTank: "lightTank",
  SPG: "SPG",
} as const;

export const TanksTypesIcons = {
  [TanksTypes.heavyTank]: HeavyTank,
  [TanksTypes["AT-SPG"]]: ATSPGTank,
  [TanksTypes.mediumTank]: MediumTank,
  [TanksTypes.lightTank]: LightTank,
  [TanksTypes.SPG]: SPGTank,
};
