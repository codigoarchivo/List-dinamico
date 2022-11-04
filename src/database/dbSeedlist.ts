import { v4 as uuidv4 } from "uuid";

interface SeedList {
  id: string;
  name: string;
  email: string;
}

interface SeedData {
  users: SeedList[];
}

export const initialData: SeedData = {
  users: [
    {
      id: uuidv4(),
      name: "Jackson Quintero",
      email: "jackson@google.com"
    },
    {
      id: uuidv4(),
      name: "Irene Paredes",
      email: "irene@google.com"
    }
  ]
};
