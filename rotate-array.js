
for (j=0; j<k; j++)
{
    for (let i=1;i<nums.length;i++)
    {
        temp=nums[i-1];
        nums[i-1]=nums[i];
        nums[i]=temp;
    } 
}

