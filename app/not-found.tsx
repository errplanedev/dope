import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>resource not found.</p>
      <Link href="/" className="underline hover:no-underline">go somewhere that does exist?</Link>
    </div>
  )
}