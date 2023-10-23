OUTPUT=sudoku
CC=gcc
CFLAGS=-std=c11 -Wall -Werror

all: $(OUTPUT)

$(OUTPUT): grid.o sudoku.o
	$(CC) $(CFLAGS) grid.o sudoku.o -o $(OUTPUT)

sudoku.o: sudoku.c
	$(CC) $(CFLAGS) -c sudoku.c

grid.o: grid.c
	$(CC) $(CFLAGS) -c grid.c

clean:
	rm -rf *.o $(OUTPUT)
