export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <p className="text-2xl font-semibold">{greeting}</p>
      <p className="text-base text-zinc-600">Built during the Building with AI agents course.</p>
      <p className="text-sm text-zinc-500">{new Date().toLocaleDateString()}</p>
    </div>
  );
}
