export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const fetchCommentsAction = (comments) => {
  return {
    type: FETCH_COMMENTS,
    payload: comments
  }
}
