import {Blog} from "./blog";

export interface BlogResponse {
  data: Blog[];
  totalPages: number;
  totalElements: number;
}
