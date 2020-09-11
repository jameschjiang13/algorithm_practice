magazine = "My name is James and I am on a diet. Please don't give me food or I will hate you."
note = "I have your son"

def check(magazin_string, note_string)
    magazine_arr = convert_string_to_arr_without_spaces(magazin_string)
    note_arr = convert_string_to_arr_without_spaces(note_string)

    note_arr.each do |nl|
        magazine_arr.each do |ml|
            if ml = nl
                
            else

            end
        end
    end

end

def convert_string_to_arr_without_spaces(string)
    arr = string.split(" ").map do |word|
        word.split("")
    end

    puts arr
end

check(magazine, note)