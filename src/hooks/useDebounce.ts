import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const useDebouncedSearch = <T>(
  searchFunction: (searchTerm: string, data: T[]) => T[],
  data: T[],
  delay: number = 500
) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<T[]>([]);

  const debouncedSearchFunction = debounce(searchFunction, delay);

  useEffect(() => {
    const results = debouncedSearchFunction(searchTerm, data);
    console.log(results);
    if (results) setSearchResults(results);
    else setSearchResults(data);
  }, [searchTerm, data, debouncedSearchFunction]);

  return [searchTerm, setSearchTerm, searchResults] as const;
};

export default useDebouncedSearch;
