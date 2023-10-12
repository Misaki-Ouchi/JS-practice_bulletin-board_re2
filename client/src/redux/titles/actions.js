export const FETCH_TITLES = "FETCH_TITLES"
export const fetchTitlesAction = (titles) => {
  return {
    type: "FETCH_TITLES",
    payload: titles
  }
}
