// a simple object
const User = {
  name: "Beau Iyere",
  email: "beauiyere@gmail.com",
  isActive: true,
};

// a use case if an object
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "Beau Iyere", isPaid: true });

// A function that returns an object
function createCourse(): {name: string, price: number} {
  return {name: "Nodejs/nestjs course", price: 139};
}
