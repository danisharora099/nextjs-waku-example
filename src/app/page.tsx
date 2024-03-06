'use client';

import { useEffect } from "react";
import { peers } from "./test";
import { createLightNode } from "@waku/sdk";

export default function Home() {
  useEffect(() => {
    (async () => {
      const node = await createLightNode({ bootstrapPeers: peers });
      console.log(node)
    })().then(() => console.log("Node created")).catch(e => console.error("Failed to create node", e));
  },[])
  return (
    <main>
    </main>
  );
}
