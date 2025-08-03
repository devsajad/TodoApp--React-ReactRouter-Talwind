import { useState } from "react";
import Spinner from "./ui/Spinner";
import { BackButton } from "./ui/BackButton";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Badge } from "./ui/Badge";

export const ModalTask = ({ type }) => {
  const { catsData, handleAddTask, isLoading, handleEditTask } =
    useOutletContext();

  const [input, setInput] = useState("");
  const [selectedCat, setSelectedCat] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  async function handleAddClick() {
    if (type === "add") await handleAddTask(input, selectedCat);
    else if (type === "edit") await handleEditTask(id, input, selectedCat);

    navigate("/");
  }

  return (
    <div className="fixed flex items-center inset-0 bg-neutral-100/65 backdrop-blur-lg dark:bg-neutral-900/70 dark:backdrop-blur-3xl z-10 p-8">
      <div className="shadow-xs w-xl mx-auto h-60/100 flex flex-col gap-5 border-1 border-neutral-300 dark:border-neutral-100 rounded-lg p-5">
        <BackButton />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={
            type === "add"
              ? "یک تسک جدید رو شروع کن ..."
              : "یک عنوان جدید انتخاب کن ..."
          }
          maxLength={25}
          className="outline-none placeholder:text-lg text-xl font-bold placeholder:text-neutral-400 dark:placeholder:text-neutral-400 dark:text-neutral-50 opacity-70"
        />

        <div className="mt-auto flex gap-3">
          {catsData?.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCat(cat.id)}
              className={`ring-neutral-700 ring-offset-1 rounded-md py-1 transition-all focus:outline-none ${
                selectedCat === cat.id ? "ring-1 " : ""
              }`}
            >
              <Badge color={cat.color}>{cat.name}</Badge>
            </button>
          ))}
        </div>

        <button
          className="bg-neutral-700 h-12 disabled:opacity-50 disabled:cursor-not-allowed text-gray-50 w-full py-3 rounded-lg flex justify-center items-center"
          onClick={handleAddClick}
          disabled={isLoading || !input || !selectedCat}
        >
          {isLoading ? <Spinner size={"mini"} /> : <span>ذخیره</span>}
        </button>
      </div>
    </div>
  );
};
