let nums=[1,2,3,4,5,6,7,8,9,];
let l=nums.length;
//traditional loop
console.log("traditional for loop")
for(let i=0; i<l ;i++)
{
    console.log(nums[i]);
}
console.log("modern for loop");
for(num of nums)
{console.log(num);}