#fish = "halibut"
#list comprehensions
#letters = [letter for letter in fish] #another way to append elements into the current list.
#for letter in fish:
#    letters.append(letter)

#letters = [letter.upper() for letter in fish] #change all upper case at the same time appending the list

#print(letters)


july_temperatures = [87, 85, 92, 79, 106]
#hot_days = [temp for temp in july_temperatures if temp > 90] # level 2 difficulty

#for temp in july_temperatures: # the normal way
#    if(temp > 90):
#        hot_days.append(temp)

hot_days = [temp for temp in july_temperatures if filter(temp)] #high-end coding

print(hot_days)