import { apiGet } from "./client";

// json-server v1 query syntax: field:operator=value
export function getHotels({ city, minRating, sort, page, perPage } = {}) {
  const params = {};

  if (city) params["city:eq"] = city;
  if (minRating) params["hotel_rating:gte"] = minRating;
  if (sort) params._sort = sort;
  if (page) params._page = page;
  if (perPage) params._per_page = perPage;

  return apiGet("/hotels", params);
}
