import NavBar from "@/components/NavBar";

export default async function Page({ params }) {
  const id = await params;
  return (
    <div>
      <h1>Game {id.id} page</h1>
      <p>Game info on the game</p>
      <p>list of stories from the game</p>
      <p>Add a story: </p>
      <form>
        <label>
          Story Title:
          <input type="text" name="title" className="bg-gray-400 rounded m-1" />
        </label>
        <label>
          Story Content:
          <input
            type="text"
            name="content"
            className="bg-gray-400 rounded m-1"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>add review</p>
      <form>
        <label>
          Review:
          <input type="text" name="title" className="bg-gray-400 rounded m-1" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>show reviews</p>
    </div>
  );
}
