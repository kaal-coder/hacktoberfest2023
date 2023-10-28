import java.util.LinkedList;

public class Queue<T> {
    private LinkedList<T> list = new LinkedList<T>();

    // Add an element to the back of the queue
    public void enqueue(T item) {
        list.addLast(item);
    }

    // Remove and return the front element of the queue
    public T dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return list.removeFirst();
    }

    // Return the front element of the queue without removing it
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return list.getFirst();
    }

    // Check if the queue is empty
    public boolean isEmpty() {
        return list.isEmpty();
    }

    // Get the size of the queue
    public int size() {
        return list.size();
    }

    // Clear the queue
    public void clear() {
        list.clear();
    }

    // Print the elements of the queue
    public void printQueue() {
        for (T item : list) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new Queue<Integer>();

        // Enqueue elements
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        // Print and dequeue elements
        queue.printQueue();  // Output: 1 2 3
        System.out.println("Dequeued: " + queue.dequeue());  // Output: Dequeued: 1

        // Print the front element
        System.out.println("Front element: " + queue.peek());  // Output: Front element: 2

        // Check if the queue is empty
        System.out.println("Is empty: " + queue.isEmpty());  // Output: Is empty: false

        // Clear the queue
        queue.clear();
        System.out.println("Is empty: " + queue.isEmpty());  // Output: Is empty: true
    }
}
