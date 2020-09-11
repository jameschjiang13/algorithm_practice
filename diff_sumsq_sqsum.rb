def sum_sq(num)
    i = 1
    sum = 0
    while i <= num
        sum = sum + i  ** 2
        i = i + 1
    end

    return sum
end

def sq_sum(num)
    i = 0
    plus_sum = 0
    while i <= num
        plus_sum = plus_sum + i
        i= i + 1
    end

    return plus_sum ** 2
end


def diff(num)
    return sq_sum(num) - sum_sq(num)
end

puts diff(100)