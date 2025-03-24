import Link from "next/link";

export default function Page() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>Stories Page</h1>
      <p>list of all stories: </p>
      {data.map((item) => (
        <div key={item}>
          <Link href={`/stories/${item}`} className="text-blue-400">
            link to story {item}
          </Link>
        </div>
      ))}
      <p>Add a story </p>
    </div>
  );
}
