import random

print("Rock, Paper, Scissor time!")

user_input = input("Your choice: (R)ock, (P)aper, or (S)cissor? ")

option = ["R", "P", "S"]

computer_choice = random.choice(option)


print("Your choice is " + user_input)
print("Computer choose " + computer_choice)

if user_input == "R" and computer_choice == "S":
    print("You won!")
elif user_input == "R" and computer_choice == "P":
    print("You lost...")
elif user_input == "P" and computer_choice == "R":
    print("You won!")
elif user_input == "P" and computer_choice == "S":
    print("You lost...")
elif user_input == "S" and computer_choice == "P":
    print("You won!")
elif user_input == "S" and computer_choice == "R":
    print("You lost...")
elif user_input == computer_choice:
    print("Tie.")
else:
    print("Please follow the rule, only input R, P, or S. All capitle cased")