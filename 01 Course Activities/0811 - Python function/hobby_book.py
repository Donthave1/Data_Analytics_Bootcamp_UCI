book = {
    "name": "Ed", 
    "age": "29", 
    "hobby": ["Gaming", "Complaining", "Eating"],
    "wakeTime": {
        "Mon - Fri": "Woke up at 5:30 AM", 
        "Sat": "Woke up at 7 AM", 
        "Sun": "Dont wake me up..."}
    }

print(f"My name is {book['name']}")
print(f"I have {len(book['hobby'])} of hobbies")
print(f"My schedule on Sunday looks like: {book['wakeTime']['Sun']}")