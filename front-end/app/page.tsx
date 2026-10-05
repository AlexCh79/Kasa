import { getProperties } from "@/lib/api";

export default async function Home() {
  const properties = await getProperties();
  console.log(properties);

  return (
    <main>
      <h1>Kasa</h1>
      <p>{properties.length} logements chargés</p>
    </main>
  );
}
