jest.mock("@/utils/log", () => ({
  addLog: jest.fn(),
}));

describe("IPInfo API Endpoint", () => {
  it("should be able to connect to ipinfo.io", async () => {
    try {
      const response: any = await fetch("https://ipinfo.io/json");

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      // Check if the response contains expected fields
      expect(data).toHaveProperty("ip");
      expect(data).toHaveProperty("city");
      expect(data).toHaveProperty("country");

      // Log the received data
      console.log("IPInfo data:", data);

      // You can add more specific checks if needed
      expect(typeof data.ip).toBe("string");
      expect(typeof data.city).toBe("string");
      expect(typeof data.country).toBe("string");
    } catch (error) {
      console.error("Error connecting to ipinfo.io:", error);
      fail("Failed to connect to ipinfo.io");
    }
  });

  // ... you can add more tests here if needed ...
});
