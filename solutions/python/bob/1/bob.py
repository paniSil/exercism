# kind of brutal force solution
import string


def response(hey_bob):
    if len(hey_bob.strip()) == 0:
                return "Fine. Be that way!"
    else:
        alphabet = list(string.ascii_lowercase)
        for letter in list(hey_bob):
            if letter.lower() in alphabet:
                if hey_bob.strip()[-1] == '?':
                    if hey_bob == hey_bob.upper():
                        return "Calm down, I know what I'm doing!"
                    return 'Sure.'
                elif hey_bob == hey_bob.upper():
                    return 'Whoa, chill out!'
                else:
                    return 'Whatever.'
            else:
                if hey_bob.strip()[-1] == '?':
                    return 'Sure.'
                elif hey_bob.strip()[-1] == '!':
                    return 'Whoa, chill out!'
                else:
                    return 'Whatever.'
