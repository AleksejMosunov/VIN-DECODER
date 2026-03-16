const API_URL = "https://vpic.nhtsa.dot.gov/api/vehicles/";

export class VinApi {
  static async decodeVin(vin: string) {
    try {
      const response = await fetch(`${API_URL}decodevin/${vin}?format=json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error decoding VIN:", error);
      throw error;
    }
  }

  static async getAllVariables() {
    try {
      const response = await fetch(
        `${API_URL}getvehiclevariablelist?format=json`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.Results;
    } catch (error) {
      console.error("Error fetching variables:", error);
      throw error;
    }
  }
}
