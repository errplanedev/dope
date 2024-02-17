'use client';

import { useState } from 'react';
import { feeds } from "@/lib/rss";
import Link from "next/link";
import { Input } from '@/components/ui/input';

export default function RSS() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeeds = feeds.filter(feed =>
    feed.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='space-y-2'>
      <h1>rss</h1>
      <Input type="text" placeholder="search feeds..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></Input>
      <div className="grid grid-cols-6 gap-4">
        {filteredFeeds.map((feed) => (
          <Link key={feed.slug} href={`/rss/${feed.slug}`} className="border border-border p-4 rounded-md hover:border-ring">
            {feed.title}
          </Link>
        ))}
        {filteredFeeds.length == 0 && (
          <Link href="https://github.com/errplanedev/dope/issues/new" target="_blank">nothing found, suggest a feed?</Link>
        )}
      </div>
    </div>
  );
}
