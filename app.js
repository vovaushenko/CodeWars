var removeDuplicates = function(nums) {
  return [... new Set(nums)]
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))