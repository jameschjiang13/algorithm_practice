def power_digit_sum (x, n)
    power = (x ** n).to_s
    digit_arr = power.split("")
    sum = 0

    digit_arr.each do |number_string|
        sum = sum + number_string.to_i
    end

    return sum
end

puts power_digit_sum(122, 1000)