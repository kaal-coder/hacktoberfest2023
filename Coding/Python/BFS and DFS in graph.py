#  A program to implement traversal algorithms (BFS and DFS) in the Graph.
class Graph:
    def __init__(self):
        self.graph = {}
    def addEdge(self, u, v):
        if u not in self.graph:
            self.graph[u] = []
        self.graph[u].append(v)
    def BFS(self, start):
        visited = set()
        queue = [start]
        bfs_output = []
        while queue:
            vertex = queue.pop(0)
            if vertex not in visited:
                bfs_output.append(vertex)
                visited.add(vertex)
                queue.extend(self.graph.get(vertex, []))
        return bfs_output
    def DFS(self, start, visited=None):
        if visited is None:
            visited = set()
        if start not in visited:
            visited.add(start)
            for neighbor in self.graph.get(start, []):
                self.DFS(neighbor, visited)
        return visited
if __name__ == '__main__':
    g = Graph()
    n = int(input("Enter number of edges: "))
    for i in range(n):
        u, v = map(str, input("Enter edge (u v): ").split())
        g.addEdge(u, v)
    print("1. BFS")
    print("2. DFS")
    choice = int(input("Choose traversal algorithm: "))
    start_node = input("Enter starting node: ")
    if choice == 1:
        print("BFS Traversal:", g.BFS(start_node))
    else:
        print("DFS Traversal:", list(g.DFS(start_node)))