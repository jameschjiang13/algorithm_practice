require 'prime'

class Number
    attr_reader :value, :prime_factor_arr
    def initialize(value)
        @value = value
        @prime_arr = []
        @prime_factor_arr = find_prime_factors(value)
    end

    def find_prime_factors(value)
        i = 2
        while i <= value
            if i.prime?
                if value % i == 0
                    @prime_arr.push(i)
                    value = value / i

                    i = i - 1
                end
            end
            i = i + 1
        end

        return @prime_arr
    end

    n1 = Number.new(3053354)
    puts n1.prime_factor_arr

end
