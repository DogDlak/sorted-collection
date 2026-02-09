import { merge } from '../src/index';

describe('merge function', () => {
    test('should merge standard sorted arrays correctly', () => {
        expect(merge([1, 4, 7],[2, 5, 8],[9, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('should handle empty arrays', () => {
        expect(merge([], [], [])).toEqual([]);
    });
    test('should handle one empty array', () => {
        expect(merge([1, 5], [], [4, 2])).toEqual([1, 2, 4, 5]);
    });
    test('should handle duplicate values', () => {
        expect(merge([1, 2, 2], [2, 3], [3, 1])).toEqual([1, 1, 2, 2, 2, 3, 3]);
    });
});
