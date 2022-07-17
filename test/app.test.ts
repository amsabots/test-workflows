import { add } from "../src/app";

const simulate_promisify = (duration = 3000) =>
  new Promise((resolve: any) => setTimeout(resolve("1"), duration));

test("Add two numbers, a & b", () => {
  expect(add(1, 2)).toBe(3);
});

test("Object value equality", () => {
  const user: { [key: string]: any } = { name: "Andrew Mititi" };
  user["age"] = 34;
  expect(user).toEqual({ name: "Andrew Mititi", age: 34 });
});

test("null assertion", () => {
  const n = null;
  expect(n).toBeFalsy();
});
test("Number equality", () => {
  const n = 3;
  expect(n).toBeGreaterThan(2);
});

test(`Asynchronous call with async:await`, async () => {
  const n = await simulate_promisify(5000);
  expect(Number(n)).toEqual(1);
});

test(`Asynchronous with a promise return type`, () => {
  return simulate_promisify(2000).then((res) => {
    expect(typeof res).toEqual("string");
  });
});
