def check_palindrome(num_string)
    digit_arr = num_string.split("")
    length = num_string.length
    if length == 1 || length == 0
        return true
    else
        if digit_arr.first == digit_arr.last
            digit_arr.shift
            digit_arr.pop
            new_num_string = digit_arr.join
            check_palindrome(new_num_string)
        else
            return false
        end
    end
end

def find_largest_3_digit_product_palindrome
    a = 999
    b = 999
    max_palindrome_num = 0
    while a >= 100
        while b >= 100
            num = "#{a * b}"
            if check_palindrome(num)
                if num.to_i > max_palindrome_num
                    max_palindrome_num = num.to_i
                end
            end
            b = b - 1
        end
        a = a - 1
        b = 999
    end

    return max_palindrome_num
end

puts find_largest_3_digit_product_palindrome