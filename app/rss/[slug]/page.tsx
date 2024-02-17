import { feeds, getFeed } from "@/lib/rss";
import { format } from "date-fns";

export default async function Page({ params }: any) {
  const { slug } = params;
  const feed = await getFeed(slug);

  return (
    <div className="space-y-2">
      <h1>{slug}</h1>
      {feed.items.map((item, index) => (
        <div key={index} className="border border-border p-4 rounded-md hover:border-ring">
          <a href={item.link} target="__blank">
            <h3>{item.title}</h3>
            {/* @ts-ignore */}
            <p>{format(new Date(item.pubDate), "MMMM dd, yyyy")}</p>
            <p>{item.contentSnippet}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
