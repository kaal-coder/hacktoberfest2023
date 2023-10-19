/* Given a linked list of N nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.


Example 1:-
Input:
N = 3
value[] = {1,3,4}
X = 2
Output: 1
Explanation: The link list looks like
1 -> 3 -> 4
     ^    |
     |____|
A loop is present. If you remove it
successfully, the answer will be 1.

Example 2:-
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output: 1
Explanation: The Linked list does not
contains any loop.

Example 3:-
Input:
N = 4
value[] = {1,2,3,4}
X = 1
Output: 1
Explanation: The link list looks like
1 -> 2 -> 3 -> 4
^              |
|______________|
A loop is present.
If you remove it successfully,
the answer will be 1.


Your Task:
You don't need to read input or print anything. Your task is to complete the function removeLoop() which takes the head of the linked list as the input parameter. Simply remove the loop in the list (if present) without disconnecting any nodes from the list.
Note: The generated output will be 1 if your submitted code is correct.


Expected time complexity: O(N)
Expected auxiliary space: O(1)
*/

// Solution:-

/*
The provided code is designed to remove a loop from a linked list using a hash set to mark visited nodes. Here's an explanation of how it works step by step:

Initialization:

unordered_set<Node*> visited: An unordered set is used to store pointers to nodes that have been visited. This set is used to detect the presence of a loop in the linked list.
Node* current = head: A pointer current is initialized to the head of the linked list. This pointer is used to traverse the linked list.
Node* prev = nullptr: Another pointer prev is initialized to nullptr. This pointer keeps track of the previous node in the traversal, which will be used to break the loop.
Loop Detection:

The code enters a while loop that continues until current reaches the end of the linked list (i.e., current becomes nullptr).
Inside the loop:
It checks whether the current node is already in the visited set. This is done using visited.find(current) != visited.end().
If the current node is found in the set, it means a loop has been detected. In this case:
The loop is broken by setting the next pointer of the previous node (prev->next) to nullptr. This effectively removes the loop.
The function returns, exiting early since the loop has been removed.
Loop Prevention:

If the current node is not found in the visited set, it means it's the first time visiting this node.
The code adds the current node to the visited set using visited.insert(current).
It then updates prev to current and advances current to the next node in the linked list, effectively continuing the traversal.
Completion:

Once the loop completes, either because a loop was detected and broken or because the end of the list was reached, the function returns.
The key idea here is to use the visited set to keep track of nodes as we traverse the linked list. If we encounter a node that is already in the set, it indicates the presence of a loop, and we break the loop by setting the next pointer of the previous node to nullptr. This ensures that the linked list is modified to remove the loop while preserving the rest of the list's structure.
*/

//{ Driver Code Starts
// driver code

#include <bits/stdc++.h>
using namespace std;

struct Node
{
    int data;
    Node *next;

    Node(int val)
    {
        data = val;
        next = NULL;
    }
};

void loopHere(Node *head, Node *tail, int position)
{
    if (position == 0)
        return;

    Node *walk = head;
    for (int i = 1; i < position; i++)
        walk = walk->next;
    tail->next = walk;
}

bool isLoop(Node *head)
{
    if (!head)
        return false;

    Node *fast = head->next;
    Node *slow = head;

    while (fast != slow)
    {
        if (!fast || !fast->next)
            return false;
        fast = fast->next->next;
        slow = slow->next;
    }

    return true;
}

int length(Node *head)
{
    int ret = 0;
    while (head)
    {
        ret++;
        head = head->next;
    }
    return ret;
}

bool notOriginal(Node *head, unordered_map<Node *, int> &myMap)
{

    while (head)
    {
        if (myMap.find(head) == myMap.end())
            return true;
        if (myMap[head] != (head->data))
            return true;

        head = head->next;
    }
}

// } Driver Code Ends
/*
structure of linked list node:

struct Node
{
    int data;
    Node* next;

    Node(int val)
    {
        data = val;
        next = NULL;
    }
};

*/

class Solution
{
public:
    // Function to remove a loop in the linked list.
    void removeLoop(Node *head)
    {
        unordered_set<Node *> visited;
        Node *current = head;
        Node *prev = NULL;
        while (current != NULL)
        {
            if (visited.find(current) != visited.end())
            {
                prev->next = NULL;
                return;
            }
            visited.insert(current);
            prev = current;
            current = current->next;
        }
    }
};

//{ Driver Code Starts.

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        unordered_map<Node *, int> myMap;

        int n, num;
        cin >> n;

        Node *head, *tail;
        cin >> num;
        head = tail = new Node(num);

        myMap[head] = num;

        for (int i = 0; i < n - 1; i++)
        {
            cin >> num;
            tail->next = new Node(num);
            tail = tail->next;
            myMap[tail] = num;
        }

        int pos;
        cin >> pos;
        loopHere(head, tail, pos);

        Solution ob;
        ob.removeLoop(head);

        if (isLoop(head) || length(head) != n || notOriginal(head, myMap))
            cout << "0\n";
        else
            cout << "1\n";
    }
    return 0;
}

// } Driver Code Ends
