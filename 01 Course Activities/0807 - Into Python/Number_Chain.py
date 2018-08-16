user_play = "y"
# stating the Flag

start_number = 0

while user_play == "y":
    user_number = int(input("How many number? "))
    stopping_number = start_number + user_number
    for x in range(start_number, user_number + start_number):
        print(x)

    start_number = stopping_number

    user_play = input("Continue the chain: (y)es or (n)o? ")