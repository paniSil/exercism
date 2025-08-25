def is_armstrong_number(number):
    number_digits = str(number)
    power = len(number_digits)
    result = 0
    for digit in number_digits:
        result += int(digit) ** power
    return number == result
