import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 513,
  site: "demo-curso",
  domains: ["demo-curso.deco.site"],
});