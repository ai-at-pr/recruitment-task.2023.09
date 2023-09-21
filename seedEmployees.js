import faker from "faker";
import { ulid } from "ulid";

const DEPARTMENTS = [
  { name: "Development", id: ulid() },
  { name: "Marketing", id: ulid() },
  { name: "Accounting", id: ulid() },
  { name: "HR", id: ulid() },
  { name: "None", id: ulid() },
];

const DEFAULT_SEED_AMOUNT = 50;
faker.locale = "en_GB";
faker.phone.phoneNumberFormat("e164");

function generateEmployeeList(listAmount) {
  return new Array(listAmount).fill(null).map(() => generateEmployee());
}

function generateEmployee() {
  const randomDepartmentId = Math.floor(Math.random() * DEPARTMENTS.length);
  return {
    city: faker.address.cityName(),
    department: DEPARTMENTS[randomDepartmentId]?.name,
    departmentId: DEPARTMENTS[randomDepartmentId]?.id,
    email: faker.internet.email(),
    fullName: faker.name.findName(),
    gender: "None",
    hireDate: "2021-12-16T17:01:00.000Z",
    id: ulid(),
    isPermanent: true,
    mobile: faker.phone.phoneNumber(),
  };
}

export function seedEmployees() {
  const generatedEmployeeArr = generateEmployeeList(DEFAULT_SEED_AMOUNT);
  customSetLocalStorage(generatedEmployeeArr);
}
