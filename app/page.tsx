export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-2xl font-semibold">{greeting}</p>
    </div>
  );
}
