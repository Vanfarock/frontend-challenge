import httpService from "./httpService";

const apiEndpoint = "/volumes";

export function getBooks(query, startIndex = 0, maxResults = 10) {
  return httpService.get(
    `${apiEndpoint}?q=intitle:${query}&startIndex=${startIndex}&maxResults=${maxResults}`
  );
}

export function getBook(bookId) {
  return httpService.get(`${apiEndpoint}/${bookId}`);
}
