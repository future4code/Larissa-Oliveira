export const goToMovies = (history) => {
    history.push("/")
}

export const goToMovieDetails = (history, id) => {
    history.push(`/details/${id}`)
}