puts "hoho"

def find_multiples_of_3_5(num)
    output_arr = []
    sum = 0
    i = 1
    j = 1

    while 3 * i < num
        output_arr.push(3 * i)
        i = i + 1
        sum = sum + 3 * i
    end

    while 5 * j < num
        if output_arr.include?(5 * j)

        else
            output_arr.push(5 * j)
            sum = sum + 5 * j
        end

        j = j + 1
    end

    puts sum
end

find_multiples_of_3_5(200)