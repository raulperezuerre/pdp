import threading
import time

def func():
    print('ran')
    time.sleep(1)
    print('done')
    time.sleep(0.85)
    print('really done')
    
x = threading.Thread(target=func)
x.start()
print(threading.activeCount())
time.sleep(1.2)

print("finally done")
