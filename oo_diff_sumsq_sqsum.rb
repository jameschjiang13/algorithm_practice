class Diff
    attr_reader :num
    def initialize(num)
        @num = num
    end

    def sum_sq
        i = 1
        sum = 0
        while i <= self.num
            sum = sum + i  ** 2
            i = i + 1
        end
    
        return sum
    end

    def sq_sum
        i = 0
        plus_sum = 0
        while i <= self.num
            plus_sum = plus_sum + i
            i= i + 1
        end
    
        return plus_sum ** 2
    end

    def value
        return self.sq_sum - self.sum_sq
    end
    
    


    a = Diff.new(10)
    puts a.value
end