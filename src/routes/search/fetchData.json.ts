export async function fetchData(prevResults: any, term: string, type: string, page: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&query=${term}&page=${page}`,
  );
  const data = await response.json();

  if (response.ok) {
    const results = [...data.results, ...prevResults];

    return {
      status: response.status,
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
      results: results,
    };
  } else {
    throw new Error(data.status_message);
  }
}
