def classify(number):
    divisors = []
    if number > 0:
        for n in range(1, number):
            if number % n == 0:
                divisors.append(n)
        divisors_sum = sum(divisors)
    
        if divisors_sum == number:
            return 'perfect'
        elif divisors_sum > number:
            return 'abundant'
        else:
            return 'deficient'
    else:
        raise ValueError('Classification is only possible for positive integers.')
