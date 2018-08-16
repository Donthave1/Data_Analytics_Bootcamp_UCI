actor = {"name": "Tom Cruise"}
#print(f'{actor["name"]}')
fruit = {
    'color': 'orange', 
    'shape': {
        'type': 'round',
        'texture': 'bumpy'
    },
    'taste': 'sour and sweet',
    'diameter': 1,
    'uses': ['Orange Juice', 'Juggling']
    }
print(f'This fruit is the color: {fruit["color"]}')
print(f'This shape properties: {fruit["shape"]}')
print(f'This fruit uses: {fruit["uses"]}')

for property in fruit:
    print(property)
