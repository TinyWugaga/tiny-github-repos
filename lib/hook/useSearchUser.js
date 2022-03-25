import { useCallback } from "react";
import { useRouter } from "next/router";

function useSearchUser() {
  const router = useRouter();
  const searchUserRepo = useCallback((username) => {
    router.push(`/users/${username}/repos`);
  },[router])

  return { searchUserRepo }
}

export default useSearchUser
