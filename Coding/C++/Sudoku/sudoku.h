/********************************************************************
   sudoku.h
   Sudoku solver/generator interface.
*********************************************************************/
#include "grid.h"
#include <stdio.h>

Grid_T sudoku_init(void);                       /* To initialize the Grid_T object of the puzzzle, initializes the avaiable choices
                                                   array and counts of each cell */
Grid_T get_pre_filled_sudoku();                 /* Incase the sudoku_generate function fails several times, this function will be
                                                    called and will return a prefilled but randomly swapped puzzle with must have a solution */
Grid_T sudoku_generate(int nelts, int unique);	/* Generate and return a sudoku puzzle with "approximately" nelts
												   elements having non-0 value. The smaller nelts the harder may be to
												   generate/solve the puzzle. For instance, nelts=81 should return a
												   completed and correct puzzle. If unique=1 the puzzle must have a
												   unique choice at each step of finding the solution. */
Grid_T sudoku_read(void);						/* Read a sudoku puzzle from stdin and return an object Grid_T
											   	   initialized to the values read. The input has the format:
													1 2 3 4 5 6 7 8 9 
													4 5 6 7 8 9 1 2 3
													7 8 9 1 2 3 4 5 6
													2 3 4 5 6 7 8 9 1 
													5 6 7 8 9 1 2 3 4
													8 9 1 2 3 4 5 6 7 
													3 4 5 6 7 8 9 1 2
													6 7 8 9 1 2 3 4 5 
													9 1 2 3 4 5 6 7 8 
											   	   Each number is followed by a space. Each line is terminated with '\n'. 
												   Values of 0 indicate empty puzzle cells. */
void sudoku_print(FILE *s, Grid_T g);			/* Print g to stream s in the same format as expected by sudoku_read(). */
Grid_T sudoku_solve(Grid_T g, Choice_T c);		/* Sovle g and return the solution; if g has multiple solutions, return one of them. 
												   c can help you iterate over all cells in g */
int sudoku_is_correct(Grid_T g);				/* Return true iff g is complete and filled in correctly. */

#if DEBUG
void sudoku_print_errors(Grid_T g);				/* Print all row, col, sub-puzzle errors/conflicts found in puzzle g */
#endif
