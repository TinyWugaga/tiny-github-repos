import { useMemo } from "react";
import useSWR from "swr";

const languageSum = (pv, cv) => pv + cv;

const useLanguages = languages_url => {
  const { data: repoLanguages, error } = useSWR(languages_url);

  const languages = useMemo(() => {
    if (error) return undefined;

    let data;
    if (repoLanguages) {
      data = [];

      const sum = Object.values(repoLanguages).reduce(languageSum, 0);
      Object.entries(repoLanguages).forEach(([language, value]) => {
        data.push({
          language,
          percentage: Math.round((value / sum) * 1000) / 10
        });
      });
    }
    return data
  }, [repoLanguages, error])

  return languages;
};

export default useLanguages;
