from twitter.update import update_twitter
from tkinter import *
from tkinter.ttk import * 

from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg, NavigationToolbar2TkAgg
from matplotlib.figure import Figure

r = Tk() 
r.title('Update Tweets') 
lf = Labelframe(r, text='Plot Area')
lf.grid(row=0, column=0, sticky='nwes', padx=3, pady=3)
Label(r, text='News Handle').grid(row=1) 
e1 = Entry(r) 
e1.grid(row=1, column=1)  

def get_text():
    global e1
    return e1.get()

def command_update():
    handle = get_text()
    print(f"Handle: {handle}")
    fig = update_twitter(handle)
    canvas = FigureCanvasTkAgg(fig, master=lf)
    canvas.show()
    canvas.get_tk_widget().grid(row=0, column=0)

button = Button(r, text='Update', width=25, command=lambda: command_update()) 
button.grid(row=2)

r.mainloop() 