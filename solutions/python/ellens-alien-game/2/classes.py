"""Solution to Ellen's Alien Game exercise."""


class Alien:
    total_aliens_created = 0

    def __init__(self, x, y):
        self.x_coordinate = x
        self.y_coordinate = y
        self.health = 3
        Alien.total_aliens_created += 1

    def hit(self):
        self.health -= 1
        return self.health

    def is_alive(self):
        if self.hit():
            return self.health > 0

    def teleport(self, x, y):
        self.x_coordinate = x
        self.y_coordinate = y
        return self.x_coordinate, self.y_coordinate

    def collision_detection(self, other_object):
        pass


def new_aliens_collection(coordinate_list):
    alien_list = []
    for coordinate in coordinate_list:
        alien_list.append(Alien(coordinate[0], coordinate[1]))
    return alien_list
