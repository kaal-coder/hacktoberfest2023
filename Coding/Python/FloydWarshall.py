# floyd warshall
def floyd_warshall(graph):
​​   n = len(graph)
   for k in range(n):                 # loop
       for i in range(n):             # outer loop
           for j in range(n):         # inner loop
               graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])        # if direct path is longer ,replace it
   for row in graph:
       print(row)                     #print graph
