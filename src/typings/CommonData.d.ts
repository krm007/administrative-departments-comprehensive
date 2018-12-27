export interface Bocotable {
  key?:number
  id?: string;
  name?: string;
  value?: number;
  status?: boolean;
  explain?: string;
  sign?:string
}
export interface BocoMixtable {
  id?: string;
  kind?:string;
  name?: string;
  value?: number;
  status?: boolean;
  explain?: string;
  sign?:string
}
export interface FilterData {
  type?:string;
  url?: string;
  timeLast?:string,
  params?: {
    yljgdm?: string;
    createTime?: string;
  };
}
