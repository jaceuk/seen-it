export async function loadData(term: any, type: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${term}`,
  );
  const data = await response.json();

  if (response.ok) {
    return {
      status: response.status,
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
      data: data.results,
    };
  } else {
    throw new Error(data.status_message);
  }
}
