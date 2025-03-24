import NavBar from "@/components/NavBar";

export default async function Page({ params }) {
  const id = await params;
  return (
    <div>
      <h1>Game {id.id} page</h1>
      <p>Game info on the game</p>
      <p>list of stories from the game</p>
      <p>Option to add a story to the game</p>
      <p>add review</p>
      <p>show reviews</p>
    </div>
  );
}
