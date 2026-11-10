import { describe, expect, it } from "vitest";

import { listings } from "@/lib/listing-data";

describe("illustrative property listings", () => {
  it("provides six listings for the homepage sample", () => {
    expect(listings).toHaveLength(6);
  });

  it("includes three sale and three rental examples", () => {
    expect(listings.filter((listing) => listing.type === "Bán")).toHaveLength(3);
    expect(listings.filter((listing) => listing.type === "Cho thuê")).toHaveLength(3);
  });
});