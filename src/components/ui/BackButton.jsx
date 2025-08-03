import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <ArrowLeft className="mr-auto cursor-pointer dark:text-neutral-50" />
    </button>
  );
};
