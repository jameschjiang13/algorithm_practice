# give a string of random brackets ()[]{}, return true if balanced, false if unbalanced
# "([])" => true  "((){}" => false
# Solution bigO: n, in sacrifice of more memory space


def balanced_bracket(input)
    i = 0
    result_hash = {}
    while i < input.length
        current_symbol = input[i]
            if result_hash[current_symbol]
                result_hash[current_symbol] = result_hash[current_symbol] + 1
            else
                result_hash[current_symbol] = 1
            end

        i = i + 1
    end

    if result_hash["("] == result_hash[")"] && result_hash["["] == result_hash["]"] && result_hash["{"] == result_hash["}"]
        return true
    else
        return false
    end
end

puts balanced_bracket("(){}[]")