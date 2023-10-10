print("Hello world")
import time

def stopwatch():
    input("Press Enter to start the stopwatch.")
    start_time = time.time()
    try:
        while True:
            elapsed_time = time.time() - start_time
            mins, secs = divmod(int(elapsed_time), 60)
            hours, mins = divmod(mins, 60)
            print(f"\rStopwatch: {hours:02d}:{mins:02d}:{secs:02d}", end="")
            time.sleep(1)
    except KeyboardInterrupt:
        pass
    finally:
        print("\nStopwatch stopped.")
        
def timer():
    try:
        hours = int(input("Enter hours: "))
        minutes = int(input("Enter minutes: "))
        seconds = int(input("Enter seconds: "))
        
        if hours < 0 or minutes < 0 or seconds < 0:
            raise ValueError("Time values cannot be negative.")
        
        total_seconds = hours * 3600 + minutes * 60 + seconds
        
        while total_seconds > 0:
            mins, secs = divmod(total_seconds, 60)
            hours, mins = divmod(mins, 60)
            print(f"\rTimer: {hours:02d}:{mins:02d}:{secs:02d}", end="")
            time.sleep(1)
            total_seconds -= 1
            
        print("\nTimer finished!")
    except ValueError:
        print("Invalid input. Please enter positive integer values for hours, minutes, and seconds.")
    
if __name__ == "__main__":
    print("1. Stopwatch")
    print("2. Timer")
    choice = input("Enter your choice (1/2): ")
    
    if choice == "1":
        stopwatch()
    elif choice == "2":
        timer()
    else:
        print("Invalid choice. Please enter 1 for Stopwatch or 2 for Timer.")
