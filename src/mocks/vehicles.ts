import { Nations } from "constants/nations";
import { Vehicle, VehiclesResponse } from "data_layer/queries/useVehiclesQuery";

export const mockVehicles: Vehicle[] = [
  {
    name: "Bat.-Châtillon 12 t",
    price_gold: 0,
    prices_xp: {
      "5185": 107000,
    },
    nation: Nations.france,
    is_premium: false,
    tier: 8,
    price_credit: 2370000,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/france-F87_Batignolles-Chatillon_12t.png",
    },
    type: "lightTank",
    tank_id: 17473,
  },
  {
    name: "Lorraine 50 t",
    price_gold: null,
    prices_xp: null,
    nation: Nations.france,
    is_premium: true,
    tier: 9,
    price_credit: null,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/france-F115_Lorraine_50t.png",
    },
    type: "heavyTank",
    tank_id: 43073,
  },
  {
    name: "M22 Locust",
    price_gold: 3000,
    prices_xp: null,
    nation: Nations.usa,
    is_premium: true,
    tier: 3,
    price_credit: 0,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/usa-A43_M22_Locust.png",
    },
    type: "lightTank",
    tank_id: 52769,
  },
  {
    name: "Löwe",
    price_gold: null,
    prices_xp: null,
    nation: Nations.germany,
    is_premium: true,
    tier: 8,
    price_credit: null,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/germany-G51_Lowe.png",
    },
    type: "heavyTank",
    tank_id: 54289,
  },
  {
    name: "T25 Pilot Number 1",
    price_gold: 11000,
    prices_xp: null,
    nation: Nations.usa,
    is_premium: true,
    tier: 8,
    price_credit: 0,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/usa-A111_T25_Pilot.png",
    },
    type: "mediumTank",
    tank_id: 57377,
  },
  {
    name: "40TP Habicha",
    price_gold: 0,
    prices_xp: {
      "2193": 23930,
    },
    nation: Nations.poland,
    is_premium: false,
    tier: 6,
    price_credit: 925000,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/poland-Pl10_40TP_Habicha.png",
    },
    type: "mediumTank",
    tank_id: 2449,
  },
  {
    name: "45TP Habicha",
    price_gold: 0,
    prices_xp: {
      "2449": 43550,
    },
    nation: Nations.poland,
    is_premium: false,
    tier: 7,
    price_credit: 1450000,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/poland-Pl11_45TP_Habicha.png",
    },
    type: "heavyTank",
    tank_id: 2705,
  },
  {
    name: "Bat.-Châtillon 25 t",
    price_gold: 0,
    prices_xp: {
      "5697": 200000,
    },
    nation: Nations.france,
    is_premium: false,
    tier: 10,
    price_credit: 6100000,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/france-F18_Bat_Chatillon25t.png",
    },
    type: "mediumTank",
    tank_id: 3649,
  },
  {
    name: "Bat.-Châtillon 25 t AP",
    price_gold: 0,
    prices_xp: {
      "17473": 198000,
    },
    nation: Nations.france,
    is_premium: false,
    tier: 9,
    price_credit: 3450000,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/france-F75_Char_de_25t.png",
    },
    type: "mediumTank",
    tank_id: 5697,
  },
  {
    name: "M24 Chaffee",
    price_gold: 0,
    prices_xp: {
      "5153": 12480,
    },
    nation: Nations.usa,
    is_premium: false,
    tier: 5,
    price_credit: 405000,
    images: {
      contour_icon:
        "http://api.tanki.su/static/2.75.1_lst/wot/encyclopedia/vehicle/contour/usa-A34_M24_Chaffee.png",
    },
    type: "lightTank",
    tank_id: 9761,
  },
];

const limit = 10;
const page = 1;
const page_total = Math.ceil(mockVehicles.length / limit);

export const mockVehiclesResponse: VehiclesResponse = {
  status: "ok",
  meta: {
    count: mockVehicles.length,
    limit,
    page,
    total: mockVehicles.length,
    page_total,
  },
  data: mockVehicles.reduce((acc, vehicle) => {
    acc[vehicle.tank_id] = vehicle;
    return acc;
  }, {} as Record<string, Vehicle>),
};
