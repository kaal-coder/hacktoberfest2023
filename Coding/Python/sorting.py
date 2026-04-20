"""
Sorting Algorithms in Python 🌀

This program lets the user enter a list of numbers and pick a sorting algorithm
to arrange them in ascending order.

Available algorithms:
- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

It shows both the unsorted and sorted lists at the end.
"""

# Bubble Sort
def bubble_sort(arr):
    # Keep looping through the list multiple times
    # and swap adjacent elements if they're in the wrong order
    for i in range(len(arr)):
        for j in range(0, len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


# Insertion Sort
def insertion_sort(arr):
    # We take one element at a time and insert it in its correct place
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Shift elements greater than key to one position ahead
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr


# Selection Sort
def selection_sort(arr):
    # Move through the array and pick the smallest element each time
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap the found minimum with the current position
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr


# Merge Sort
def merge_sort(arr):
    # If the list has one or zero elements, it's already sorted
    if len(arr) <= 1:
        return arr

    # Split the array into halves and sort each half
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    # Merge the sorted halves
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    # Compare and merge elements from both halves
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Add remaining elements from either half
    result.extend(left[i:])
    result.extend(right[j:])
    return result


# Quick Sort
def quick_sort(arr):
    # This function uses the divide-and-conquer approach
    # to sort elements by choosing a pivot
    def partition(low, high):
        pivot = arr[high]  # taking the last element as pivot
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    def quicksort_recursive(low, high):
        # Recursively sort elements before and after partition
        if low < high:
            pi = partition(low, high)
            quicksort_recursive(low, pi - 1)
            quicksort_recursive(pi + 1, high)

    quicksort_recursive(0, len(arr) - 1)
    return arr


# Main Program
if __name__ == "__main__":
    print("Welcome to Sorting Algorithms!")
    user_input = input("Enter numbers separated by spaces: ").strip()
    arr = [int(x) for x in user_input.split()]

    print("\nChoose a sorting algorithm:")
    print("1. Bubble Sort")
    print("2. Insertion Sort")
    print("3. Selection Sort")
    print("4. Merge Sort")
    print("5. Quick Sort")

    choice = input("Enter your choice (1-5): ").strip()
    print(f"\nUnsorted List: {arr}")

    # Run the chosen sorting algorithm
    if choice == '1':
        sorted_arr = bubble_sort(arr.copy())
        algo = "Bubble Sort"
    elif choice == '2':
        sorted_arr = insertion_sort(arr.copy())
        algo = "Insertion Sort"
    elif choice == '3':
        sorted_arr = selection_sort(arr.copy())
        algo = "Selection Sort"
    elif choice == '4':
        sorted_arr = merge_sort(arr.copy())
        algo = "Merge Sort"
    elif choice == '5':
        sorted_arr = quick_sort(arr.copy())
        algo = "Quick Sort"
    else:
        print("❌ Invalid choice! Using Quick Sort by default.")
        sorted_arr = quick_sort(arr.copy())
        algo = "Quick Sort"

    print(f"\nSorted List using {algo}: {sorted_arr}")
    print("\nSorting completed successfully!")
