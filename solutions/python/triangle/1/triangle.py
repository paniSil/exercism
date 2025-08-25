def equilateral(sides):
    a, b, c = sides
    if a == 0 or b == 0 or c == 0:
        return False
    if a + b >= c and b + c >= a and a + c >= b:
        return a == b == c
    else:
        return False


def isosceles(sides):
    a, b, c = sides
    if a == 0 or b == 0 or c == 0:
        return False
    if a + b >= c and b + c >= a and a + c >= b:
        return a == b or b == c or c == a
    else:
        return False


def scalene(sides):
    a, b, c = sides
    if a == 0 or b == 0 or c == 0:
        return False
    if a + b >= c and b + c >= a and a + c >= b:
        return a != b != c != a
    else:
        return False
