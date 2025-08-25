#TODO: define the 'EXPECTED_BAKE_TIME' constant.
EXPECTED_BAKE_TIME = 40


def bake_time_remaining(elapsed_bake_time):
    """Calculate remaining bake time"""
    return EXPECTED_BAKE_TIME - elapsed_bake_time

#TODO: Define the 'preparation_time_in_minutes()' function below.
# You might also consider using 'PREPARATION_TIME' here, if you have it defined.

def preparation_time_in_minutes(number_of_layers):
    """Calculate how much time is need to prepare all layers"""
    return number_of_layers * 2


#TODO: define the 'elapsed_time_in_minutes()' function below.
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate sum of the needed time for baking and preparation"""
    total = number_of_layers*2 + elapsed_bake_time
    return total
