import { atom } from "recoil";

export const userStore = atom({
  key: "userStore",
  default: {
    name: "",
    email: "",
    authority: "",
    number: 0,
    grade: 0,
    createDateTime: "",
    lastModifiedDateTime: "",
    id: 0,
    classes: 0,
  },
});
