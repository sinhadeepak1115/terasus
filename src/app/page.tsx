import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="text-red-500">Hi</div>
    </HydrateClient>
  );
}
