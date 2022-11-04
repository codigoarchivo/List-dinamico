import { IList } from "../interfaces";

export const shuffle = (array: IList[]) => {
  let r = array
    .map((i: any) => [i, Math.random()])
    .sort((a: any, b: any) => a[1] - b[1])
    .filter((i: any) => !i[0].locked);
  return array.map((i: IList) => (i.locked ? i : r.pop()![0]));
};
