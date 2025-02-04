import { sum } from "@/app/utils";

test("1+2는 3이다.", () => {
	expect(sum(1, 2)).toBe(3);
});
test("2+2는 4이다.", () => {
	expect(sum(2, 2)).toBe(4);
});
