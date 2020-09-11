def calculate_lcd(num1, num2)
    if num2 < num1
        e = num1
        num1 = num2
        num2 = e
    end

    dif = num2 - num1
    if dif == 0
        return num1
    else
        calculate_lcd(num1, dif)
    end
end

def calculate_sm(num1, num2)
    lcd = calculate_lcd(num1, num2)
    a = num1 / lcd
    b = num2 / lcd

    return lcd*a*b
end

def fine_smallest_multiples(num)
    i = 1
    result = num
    while i < num
        result = calculate_sm(result, num - i)
        i = i + 1
    end

    puts result
end

fine_smallest_multiples(10)
