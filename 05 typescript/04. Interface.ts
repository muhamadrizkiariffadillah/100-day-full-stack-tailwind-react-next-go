// Basic interface

interface Users {
  Id: number;
  FullName: string;
  IsAdmin: boolean;
}

const user2: Users = {
  Id: 2,
  FullName: "Muhamad Rizki",
  IsAdmin: true,
};

// Extend interface

interface Company extends Users {
  Company: string;
}

const employee: Company = {
  Id: 3,
  FullName: "Kibo",
  IsAdmin: false,
  Company: "Self Learning",
};

