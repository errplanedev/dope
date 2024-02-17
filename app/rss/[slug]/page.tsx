import { feeds, getFeed } from "@/lib/rss";
import { format } from "date-fns";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = params;
  const feed = await getFeed(slug);

  return (
    <div className="space-y-2">
      <h1>{slug}</h1>
      {feed.items.map((item, index) => (
        <div key={index} className="border border-border p-4 rounded-md hover:border-ring">
          <Link href={item.link} target="__blank">
            <h3>{item.title}</h3>
            <p>{format(new Date(item.pubDate), "MMMM dd, yyyy")}</p>
            <p>{item.contentSnippet}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
