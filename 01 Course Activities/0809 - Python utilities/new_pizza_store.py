pizza_list = ["Cheese", "Everything", "Pepperoni", "Veggie", "Hawaiian"]

for pizza in pizza_list:
    print("(" + str(pizza_list.index(pizza)) + ")" + pizza)

purchased_list = [0, 0, 0, 0, 0]

hungry = "y"

print("Welcom to the Pizza House, please see below for our menu:")

while hungry == "y":


    print("(1) Cheese", "(2) Everything", "(3) Pepperoni", "(4) Veggie", "(5) Hawaiian")

    customer_choice = input("Which pizza would you like?")

    choice_index = int(customer_choice) - 1

    purchased_list[choice_index] += 1

    print("No problem!, " + pizza_list[choice_index] + " on the way.")
    
    hungry = input("Anything else? (y)es or (n)o?")


print("Let me repeat your order: ")

for pizza_index in range(len(pizza_list)):
    pizza_count = str(purchased_list[pizza_index])
    pizza_name = str(pizza_list[pizza_index])

    print(pizza_count + " " + pizza_name)
