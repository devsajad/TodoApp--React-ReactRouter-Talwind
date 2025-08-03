function ListSkeleton() {
  return (
    <div
      role="status"
      className="max-w-sm animate-pulse w-full ml-auto flex flex-col gap-5"
    >
      <p className="h-4 bg-gray-300 rounded-full max-w-[380px] mb-2.5"></p>
      <p className="h-4 bg-gray-300 rounded-full max-w-[340px] mb-2.5"></p>
      <p className="h-4 bg-gray-300 rounded-full max-w-[320px] mb-2.5"></p>
      <p className="h-4 bg-gray-300 rounded-full max-w-[320px] mb-2.5"></p>
    </div>
  );
}

export default ListSkeleton;
