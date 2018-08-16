candy_List = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish", "Gum", "Hershey Bar", "Skittles", "Starbursts", "M&Ms"]
for candy in candy_List:
    print("[" + str(candy_List.index(candy)) + "]" + candy)
candy_cart = []
answer = "yes"
while answer == "yes":
    candychoice = int(input("Which candy do you want? "))
    candy_cart.append(candy_List[candychoice])
    answer = input("Would you like to make another choice? ")
    
print("I brought home with me...")
for candy in candy_cart:
    print(candy)



