import { CircleAlert } from "lucide-react";

function Error({ children }) {
  return (
    <div className="ml-auto">
      <div className="flex gap-2 text-right">
        <CircleAlert className="text-red-500" />
        <p className="text-red-500 font-bold"> مشکلی به وجود اومده ! </p>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default Error;
