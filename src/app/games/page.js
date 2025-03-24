import Link from "next/link";

export default function Page() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>Games Page</h1>
      <p>list of all games: </p>
      {data.map((item) => (
        <div key={item}>
          <Link href={`/games/${item}`} className="text-blue-400">
            link to game {item}
          </Link>
        </div>
      ))}
      <p>Add a game </p>
    </div>
  );
}
