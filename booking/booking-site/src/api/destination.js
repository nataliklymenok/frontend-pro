import { apiGet } from "./client";

export function getDestinations() {
  return apiGet("/destination");
}
