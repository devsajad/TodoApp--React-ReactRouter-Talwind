import { useLocalStorageState } from "./useLocalStorageState";

export const useAuth = () => {
  const [user, setUser] = useLocalStorageState(null, "user");

  function login(email, password, name) {
    setUser({ email, password, name });
    return true;
  }

  function logout() {
    setUser(null);
  }

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };
};
