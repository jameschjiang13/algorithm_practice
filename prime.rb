require 'prime'

def find_primes(num)
    prime_factor_arr = []
    i = 2
    while i <= num
        if i.prime?
            if num % i == 0
                prime_factor_arr.push(i)
                num = num / i

                i = i - 1
            end
        end

        i = i + 1
    end

    return prime_factor_arr
end

puts find_primes(98764367)