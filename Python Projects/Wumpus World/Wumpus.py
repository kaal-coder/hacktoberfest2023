class WumpusWorld:
    def __init__(self, size, pits, wumpus, gold, start, breezes, stenches):
        self.size = size
        self.pits = pits
        self.wumpus = wumpus
        self.gold = gold
        self.start = start
        self.arrow = True
        self.breezes = breezes
        self.stenches = stenches
        self.agent_reward = 1000 

    def is_valid(self, x, y):
        return 0 <= x < self.size and 0 <= y < self.size

    def is_safe(self, x, y):
        return (x, y) not in self.pits and (x, y) != self.wumpus

    def get_adjacent_cells(self, x, y):
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        adjacent_cells = []

        for dx, dy in directions:
            new_x, new_y = x + dx, y + dy
            if self.is_valid(new_x, new_y):
                adjacent_cells.append((new_x, new_y))

        return adjacent_cells

    def bfs(self):
        queue = [(self.start, [])]
        visited = set()

        wumpus_reachable = False  

        while queue:
            current, path = queue.pop(0)
            x, y = current

            print(f"Transported to ({x}, {y})")

            if current == self.gold:
                return path + [current]

            visited.add(current)

            for neighbor in self.get_adjacent_cells(x, y):
                if neighbor not in visited and self.is_safe(*neighbor):
                    queue.append((neighbor, path + [current]))

            # Check if wumpus is reachable
            if not wumpus_reachable and self.wumpus in self.get_adjacent_cells(x, y):
                wumpus_reachable = True

        return None

    def get_reward(self, x, y):
        if (x, y) == self.wumpus:
            self.agent_reward -= 100  # Penalty for being eaten by wumpus
            return -100
        elif (x, y) in self.pits:
            self.agent_reward -= 50  # Penalty for falling into a pit
            return -50
        elif (x, y) == self.gold:
            self.agent_reward += 100  # Reward for finding gold
            return 100
        else:
            self.agent_reward -= 1  # Small penalty for normal movement
            return -1
    def print_final_reward(self, final_position):
        x, y = final_position
        print(f"Final Reward at ({x}, {y}): {self.agent_reward}")

    def print_world(self, current_position):
        for i in range(self.size):
            for j in range(self.size):
                if (i, j) == current_position:
                    print("A ", end='') 
                elif (i, j) == self.wumpus:
                    print("W ", end='') 
                elif (i, j) in self.pits:
                    print("P ", end='')
                elif (i, j) == self.gold:
                    print("G ", end='') 
                elif (i, j) in self.breezes:
                    print("B ", end='')  
                elif (i, j) in self.stenches:
                    print("S ", end='')  
                else:
                    print(". ", end='') 
            print()  # Move to the next row


world_size = 4
pits = [(1, 2), (2, 1)]
wumpus = [(3, 1),(3,3)]
gold = (3,2)
start = (0, 0)
breezes = [(1, 0), (2, 2)]
stenches = [(2, 0)]

world = WumpusWorld(world_size, pits, wumpus, gold, start, breezes, stenches)
path = world.bfs()

if path is not None:
    for step, position in enumerate(path):
        print(f"Step {step}:")
        world.print_world(position)
        world.get_reward(*position)  # Get and print the reward
    world.print_final_reward(path[-1])   # Print final reward
else:
    print("No path found")
