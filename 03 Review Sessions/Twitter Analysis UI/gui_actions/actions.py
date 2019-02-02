def get_text():
    global e1
    return e1.get()

def command_update():
    handle = get_text()
    update_twitter(handle)