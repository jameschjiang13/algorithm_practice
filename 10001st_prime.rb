def find_nth_prime(n)
    i = 1
    prime_count = 0
    while prime_count <= n
        if prime?(i)
            prime_count = prime_count + 1
            if prime_count == n
                return i
            end
        end
        i = i + 1
    end
end

def prime?(num)
    if num < 2
        return false
    end
    (2..Math.sqrt(num).to_i).each do |i|
        if num % i == 0
            return false
        end
    end

    return true
end

puts find_nth_prime(10001)