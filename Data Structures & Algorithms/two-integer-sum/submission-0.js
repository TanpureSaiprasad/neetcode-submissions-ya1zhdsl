class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let firstindex = 0;
        let secoundindex = 0;

        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(i==j)
                    continue;
                if((nums[i] + nums[j]) == target){
                    firstindex = i;
                    secoundindex = j;
                }
            }
        }
        return [firstindex,secoundindex];
    }
}
