"use client";

import { useEffect } from "react";

export const peers = [
  "/ip4/49.206.132.241/tcp/8000/ws/p2p/16Uiu2HAm9sQfeoR3fs13m8DRZvUE5AVjLqw8sFgZPa3ehu8tyzS4",
];

export function Test() {
  useEffect(() => {
  if (typeof window !== "undefined") {
    import("@waku/sdk").then(({ createLightNode }) => {
      createLightNode({ bootstrapPeers: peers })
        .then(node => console.log("Node created", node))
        .catch(e => console.error("Failed to create node", e));
    });
  }
}, []);


  return (
    <div>
      <h2>Test</h2>
    </div>
  );
}
