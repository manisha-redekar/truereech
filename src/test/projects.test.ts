import { describe, expect, it } from "vitest";
import { projects } from "@/lib/content";

describe("client work", () => {
  it("includes Joshi Institute's supplied work without inventing a URL", () => {
    const client = projects.find(project => project.name === "Joshi Institute");
    expect(client?.desc).toBe("Content, social media content, Google Business Profile work, ad scripts, and ad creatives.");
    expect(client?.url).toBeUndefined();
  });
});