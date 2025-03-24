import NavBar from "@/components/NavBar";

export default async function Page({ params }) {
  const id = await params;
  return (
    <div>
      <h1>Story {id.id} page</h1>
      <p>Story data</p>
      <p>Link to the user's profile</p>
    </div>
  );
}
