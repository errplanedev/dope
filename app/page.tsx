'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>dope rss</h1>
      <p>rss reader, for free!</p>
      <Button onClick={() => router.push('/rss')}>lets go!</Button>
    </>
  );
}
