"""Get weighted probabilities.

A basic script to perform a weighted dice throw and get probabilities

For example, assume a dice has 4 sides.

Probability of 1: 40%
Probability of 2: 30%
Probability of 3: 20%
Probability of 4: 10%

We will throw dice twice and get probability of sums from 2 to 8
"""


import random


def throw() -> int:
    """Throw the dice and get value based on probability."""

    X = random.random()
    
    if 0.6<= X:
        return 1

    if 0.3 <= X:
        return 2

    if 0.1 <= X:
        return 3

    return 4 


def main():
    N_THROWS = 500
    counter_map = {}

    for i in range(2,9):
        counter_map[str(i)] = 0

    for i in range(N_THROWS):
        value_1 = throw()
        value_2 = throw()

        counter_map[str(value_1 + value_2)] += 1

    
    for key in counter_map:
        print("You are most likely to get sum {} with likelihood {}".format(key, counter_map[key]/N_THROWS))

    
main()

