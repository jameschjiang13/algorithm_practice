# Solution BigO: n

def largestSubarraySum(arr)
    largest = arr[0]
    current_sum = 0
    i = 0

    while i < arr.length
        current_sum = current_sum + arr[i]
        if current_sum > largest 
            largest = current_sum
        end

        i = i + 1
    end

    return largest
end

puts largestSubarraySum([1, -1, 5, 3, -7, 4, 5, 6, -100, 4])
#this should return 16, which is the sum of [1, -1, 5, 3, -7, 4, 5, 6]