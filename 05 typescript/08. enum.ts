enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const move = Direction.Left; // 2

// Enum with custom value
enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

// Enum string

enum Role {
  Admin = "Admin",
  User = "Users",
  Guest = "Guest",
}
