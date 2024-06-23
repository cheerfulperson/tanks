/**
 * An array of fields used in the vehicles query.
 * Each field represents a specific attribute of a vehicle.
 */
export const VehiclesFields = [
  "tank_id",
  "is_premium",
  "name",
  "nation",
  "price_credit",
  "price_gold",
  "prices_xp",
  "tier",
  "type",
  "images.contour_icon",
] as const;
