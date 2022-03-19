import useSWR from "swr";

const useLanguages = (languages_url) => {
  const { data: languages, error } = useSWR('languages_url');

  if(error) return {}
  return languages
}
