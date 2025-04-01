// app/showdata/page.tsx (for App Router in Next.js 13+)

import ShowDataClient from "./ShowDataClient";

async function getServerData() {
  const response = await fetch("https://catfact.ninja/fact", {
    cache: "no-store", // Ensures fresh data every request
  });
  const data = await response.json();
  return { fact: data.fact, length: data.length };
}

export default async function ShowDataPage() {
  const initialData = await getServerData();

  return <ShowDataClient initialData={initialData} />;
}
