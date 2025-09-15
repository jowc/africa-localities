// Integration tests for routes in src/index.ts
const request = require("supertest");
import app from "./index";
import * as service from "@services/localities.service";
import { ServerResponse } from "@utils/localities.utils";
import { after, afterEach } from "node:test";

jest.mock("@services/localities.service", () => ({
  __esModule: true,
  getAllLocalities: jest.fn(),
  getLocality: jest.fn(),
}));

const mockLocalities = [
  { id: 1, name: "Nigeria", children: [] },
  { id: 2, name: "Ghana", children: [] },
];

describe("GET / (all localities)", () => {
  it("should return all localities", async () => {
    // Arrange mock
    service.getAllLocalities.mockReturnValueOnce(
      ServerResponse(200, mockLocalities, "retrieved successfully"),
    );

    const response = await request(app).get("/");
    app.close()


    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      ServerResponse(200, mockLocalities, "retrieved successfully"),
    );

  });
});
