import { key } from "localforage";

export type IcerikReferans = {
  baslik: string;
  icerikYolu: string;
  aciklama: string;
};

export const calismalar: Array<IcerikReferans> = [
  {
    baslik: "Deneme",
    icerikYolu: "Deneme yazısı",
    aciklama: "Bu yazı deneme içindir",
  },
];
export const notlar: Array<IcerikReferans> = [];
