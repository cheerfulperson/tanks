const API_URL = import.meta.env.VITE_API_URL as string;
const APPLICATION_ID = import.meta.env.VITE_APPLICATION_ID as string;

if (!API_URL) {
  throw new Error("VITE_API_URL env is not defined");
}

if (!APPLICATION_ID) {
  throw new Error("VITE_MQTT_BROKER_URL env is not defined");
}

/**
 * Represents the environment configuration.
 */
export const env = {
  /**
   * The API URL.
   */
  API_URL,

  /**
   * The application ID.
   */
  APPLICATION_ID,
};
