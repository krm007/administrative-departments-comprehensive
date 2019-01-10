/**
 * 生成表单数据
 */
export interface FormStructure {
  value: string;
  text: string;
  url?: string;
}
/**
 * 选择框数据
 */
export interface FormSelectData {
  value: string;
  text: string;
}
/**
 * 分页
 */
export interface BocoPage<T> {
  pageNum: number;
  pageSize: number;
  size: number;
  startRow: number;
  endRow: number;
  total: number;
  pages: number;
  list: T;
  prePage: number;
  nextPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  navigatePages: number;
  navigatepageNums: number[];
  navigateFirstPage: number;
  navigateLastPage: number;
  firstPage: number;
  lastPage: number;
}
