class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (const n of nums) {
            if (freq.has(n)) {
                freq.set(n, freq.get(n) + 1);
            } else {
                freq.set(n, 1);
            }
        }
        return [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a))
            .slice(0, k);
    }
}
