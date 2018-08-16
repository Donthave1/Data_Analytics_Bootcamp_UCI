names = []
for _ in range(5):
    name = input("Please enter the name of someone you know. ")
    names.append(name)

# Use a list comprehension to create a list of lowercased names
lowercased = [name.lower() for name in names]


# Use a list comprehension to create a list of titlecased names
titlecased = [name.title() for name in names]


invitations = [
    f"Dear {name}, please come to the wedding this Saturday!" for name in titlecased]

for invitation in invitations:
    print(invitation)