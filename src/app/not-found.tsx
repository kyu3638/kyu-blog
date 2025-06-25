import Link from "next/link";

const NotFound = () => {
  return (
    <div className="font-fira-mono flex h-full w-full flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-medium">Page Not Found</h2>
      <p className="text-center">The page you are looking for doesn't exist</p>
      <button className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-200 active:bg-gray-400">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
