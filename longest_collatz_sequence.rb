
def collatz(n)
    arr = [n]
    current_num = n
    while current_num != 1
        current_num = next_value(current_num)
        arr.push(current_num)
    end

    return arr
end

def next_value(n)
    current_num = n
    if n.even?
        current_num = even_next(current_num)
    else
        current_num = odd_next(current_num)
    end
end

def even_next(n)
    return n/2
end

def odd_next(n)
    return 3 * n + 1
end

def longest_collatz(upper_limit)
    i = 0
    longest_arr_starting_num = 0
    longest_length = 0
    while i <= upper_limit
        length = collatz(i).length
        if length > longest_length
            longest_length = length
            longest_arr_starting_num = i
        end

        i = i + 1
    end

    return longest_arr_starting_num
end

puts longest_collatz(10)