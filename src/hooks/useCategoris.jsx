import { useEffect } from "react";
import { useState } from "react";
import { readCats } from "../services/apiTodos";

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [catsData, setCatsData] = useState();

  useEffect(() => {
    (async function fetchCats() {
      try {
        setIsLoading(true);
        setError("");

        const data = await readCats();

        setCatsData(data);
      } catch (error) {
        console.error(error.message);
        setError("لطفا اتصال اینترنت خودت رو بررسی و دوباره امتحان کن");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading, error, catsData };
};
