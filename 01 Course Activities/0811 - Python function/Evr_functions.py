#def show(message):
    #logic goes here
#    print(message)

#show("Hi my name is Ed")



# @param List sand
# @return List
#def Tommy(sand):
    #logic goes here
#    return separate_sand(sand)

#bucket = ["Blue", "Red"]
#cleaned_sand = Tommy(bucket)

#def make_quesadilla(protein="beef", topping="sour cream"):
#    quesadilla = f"Here is a {protein} quesadilla with {topping}"
#    print(quesadilla)
#
#make_quesadilla(topping="salsa verde")

def average(numbers):
    length = len(numbers)
    total = 0.0
    for number in numbers:
        total += number
    return total / length

print(f'Result 1: {average([1, 50, 9])}')
print(f'Result 2: {average(range(11))}')