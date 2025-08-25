SUBLIST = 1
SUPERLIST = 2
EQUAL = 3
UNEQUAL = 4


def sublist(list_one, list_two):
    string_one = ','.join(str(num) for num in list_one)
    string_two = ','.join(str(num) for num in list_two)
    print(string_one)
    print(string_two)
    if list_one == list_two:
        return 3
    elif list_one == [] and list_two != []:
        return 1
    elif list_one != [] and list_two == []:
        return 2
    elif len(list_one) > len(list_two):
        if string_two in string_one:
            return 2
        else:
            return 4
    elif len(list_one) < len(list_two):
        if string_one in string_two:
            return 1
        else:
            return 4
    else:
        return 4