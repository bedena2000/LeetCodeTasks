// Link to task - https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    
    const numbers = {};
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]] = numbers[nums[i]] + 1;
        } else {
            numbers[nums[i]] = 1;
        }
    };
    
    for(let m = 0; m < k; m++) {
        let maxElement = 0;
        let maxElementKey = 0;
        for(const [key, value] of Object.entries(numbers)) {
            if(!result.includes(parseInt(key))) {
                
                if(numbers[key] > maxElement) {
                    maxElement = numbers[key];
                    maxElementKey = key;
                };
            };
        };
        result.push(parseInt(maxElementKey));
    };

    return result;


};