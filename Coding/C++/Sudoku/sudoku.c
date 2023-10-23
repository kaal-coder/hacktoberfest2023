/********************************************************************
   sudoku.c
   Sudoku solver/generator interface.
*********************************************************************/
#include "sudoku.h"
#include "stdlib.h"
#include "unistd.h"

Grid_T sudoku_init(void)            /* To initialize the Grid_T object of the puzzzle, initializes the avaiable choice
                                    * array and counts of each cell */
{
    Grid_T g;       /* Generate new puzzle */
    int i, j, k;

    for( i = 0; i < 9; i++)     /* loop through all rows */
    {
        for(j = 0; j < 9; j++)  /* loop through all columns */
        {
            g.cells[i][j].count = 9;        /* all choices are available */
            g.cells[i][j].choices[0] = 0;   /* cell is empty */
            for(k = 1; k < 10; k++)
            {
                g.cells[i][j].choices[k] = 1;   /* set all choices */
            }
        }
    }
    g.unique = 1;       /* Initially assume that all puzzles have a unique solution
 *                         will be updated in sole() if it doesn't */

    return g;
}

Grid_T sudoku_read(void)        /* Read a sudoku puzzle from stdin and return an object Grid_T
											   	   initialized to the values read. */
{
    int v[9][9];    /* array to input values */
    int i, j;
    Grid_T g = sudoku_init();       /* create and initialze grid */

    for(i = 0; i < 9; i++)
    {
        for(j = 0; j < 9; j++)
        {
            scanf("%d", &v[i][j]);  /* Loop through all values and input in array */
        }
    }

    g = grid_init(g, v);        /* Grid initialize from the array */
    return g;
}

void sudoku_print(FILE *s, Grid_T g)    /* Print g to stream s in the same format as expected by sudoku_read(). */
{
    int i, j;
    Choice_T c;

    for(i = 0; i < 9; i++)      /* Loop thriugh complete grid */
    {
        for(j = 0; j < 9; j++)
        {
            c = grid_read_value(g, (Choice_T){i, j, 0});        /* Get the cell value */
            fprintf(s, "%d ", c.n);         /* print the value on the file stream seperated by space */
        }
        fprintf(s, "\n");   /* new line */
    }
}

int sudoku_is_correct(Grid_T g) /* Return true iff g is complete and filled in correctly. */
{
    int i, j, k, box_i, box_j, count[10];   /* Count to check the duplications */

    /* Check if each element contains a value between 1 and 9 */
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (g.cells[i][j].choices[0] < 1 || g.cells[i][j].choices[0] > 9) {
                return 0;  /* Empty cell exists */
            }
        }
    }
    /* Check each row for repeating values */
    for (i = 0; i < 9; i++) {
        /* reset the count array */
        for(k= 1; k <= 9; k++) {
            count[k] = 0;
        }

        for (j = 0; j < 9; j++) {
            count[g.cells[i][j].choices[0]]++;
        }
        for (k = 1; k <= 9; k++) {
            if (count[k] != 1) {
                return 0;  /* Duplication in row i */
            }
        }
    }

    /* Check each column for repeating values */
    for (j = 0; j < 9; j++) {
        /* reset the count array */
        for(k= 1; k <= 9; k++) {
            count[k] = 0;
        }

        for (i = 0; i < 9; i++) {
            count[g.cells[i][j].choices[0]]++;
        }
        for (k = 1; k <= 9; k++) {
            if (count[k] != 1) {
                return 0;  /* Duplication in column j */
            }
        }
    }

    /* Check each 3x3 subgrid for repeating values */
    for (i = 0; i < 9; i += 3) {
        for (j = 0; j < 9; j += 3) {
            /* reset the count array */
            for(k= 1; k <= 9; k++)
                count[k] = 0;

            for (box_i = i; box_i < i + 3; box_i++) {
                for (box_j = j; box_j < j + 3; box_j++) {
                    count[g.cells[box_i][box_j].choices[0]]++;
                }
            }
            for (k = 1; k <= 9; k++) {
                if (count[k] != 1) {
                    return 0;  /* Duplication in block */
                }
            }
        }
    }

    return 1;  /* Sudoku is complete and correct */
}

Grid_T get_pre_filled_sudoku()          /* Return a prefilled puzzle */
{
    int num, i, j, k;
    int RorC, s1, s2, b;
    Grid_T g = sudoku_init();   /* generate puzzle */

    for(i = 0, j = 0; j < 9; j++)       /* set the first row as 1 2 3 4 5 6 7 8 9 */
        g = grid_update(g, (Choice_T){i, j, j+1});

    for(i = 1; i < 9; i++)      /* Set the remaining rows by avoiding duplications */
    {
        num = grid_read_value(g, (Choice_T){i-1, 0}).n + 3;
        if( num > 9)
            num = num - 8;
        for(j = 0; j < 9; j++, num++)
        {
            g = grid_update(g, (Choice_T){i, j, num});
            if( num == 9)
                num = 0;
        }
    }
    /* prefilled solution of sudoku has been generated */

    /* swapping the rows and columns of the puzzle to add the degree of randomness */
    for ( k = 0; k < 50; k++ )
    {
        RorC = rand() % 10;     /* check if we are to swap rows or columms */
        b = rand() % 9;         /* select random area */
        b = b - (b%3);

        if( RorC < 5 )  /* swap rows */
        {
            s1 = rand() % 3 + b;    /* generare row indices randomly */
            s2 = rand() % 3 + b;

            while ( s1 == s2 )
                s2 = rand() % 3 + b;        /* repeat until same */

            for( i = 0; i < 9; i++ )    /* swap whole rows */
            {
                num = grid_read_value(g, (Choice_T){s1, i, 0}).n;
                g.cells[s1][i].choices[0] = g.cells[s2][i].choices[0];
                g.cells[s2][i].choices[0] = num;
            }
        }
        else       /* swap columns */
        {
            s1 = rand() % 3 + b;    /* generare column indices randomly */
            s2 = rand() % 3 + b;

            while ( s1 == s2 )
                s2 = rand() % 3 + b;

            for( i = 0; i < 9; i++ )        /* swap whole columns */
            {
                num = grid_read_value(g, (Choice_T){i, s1, 0}).n;
                g.cells[i][s1].choices[0] = g.cells[i][s2].choices[0];
                g.cells[i][s2].choices[0] = num;
            }
        }
    }
    return g;
}

Grid_T sudoku_generate(int nelts, int unique)   /* Generate and return a sudoku puzzle with "approximately" nelts
												   elements having non-0 value. The smaller nelts the harder may be to
												   generate/solve the puzzle. For instance, nelts=81 should return a
												   completed and correct puzzle. If unique=1 the puzzle must have a
												   unique choice at each step of finding the solution. */
{
    int i, j, count, isGenerated, random_i, random_j, previous_i, previous_j; /* Helper variables   */
    Choice_T c;
    Grid_T g, solution, s;    /*  g is the grid, si for solution in case of unique constraint  */
    Grid_T backup;      /*  Taking backup in case of the unique contraint  */

    count = 0;
    isGenerated = 0;        /*  To check if the puzzle is correctly generated  */
    do {
        g = sudoku_init();      /*  Initialize from start  */

        for (i = 0; i < 9; i++) {       /*  Loop on all values  */
            for (j = 0; j < 9; j++) {
                c = grid_iterate(g, (Choice_T) {i, j, 0});  /*  Set the cell randomly from the available set of choices  */
                if (c.n != 0) {     /*  if set of choice available  */
                    g = grid_update(g, c);  /*  Update the grid  */
                }
            }
        }

        if(sudoku_is_correct(g)) {      /* sudoku is ssuccessfully implemented    */
            isGenerated = 1;
            break;
        }

        count++;
    }while(count < 10);     /*  repeat 10 times to generate a valid puzzle  */

    if( !isGenerated ) {        /*  If the grid has not been generated then get the randomly swapped prefilled solved puzze  */
        g = get_pre_filled_sudoku();
    }

    count = 9*9;    /* initially, number of non-zero elements are 81 */
    previous_i = -1;
    previous_j = -1;

    while(count > nelts && count > 0)       /* the nelts elemets */
    {
        backup = g;     /* Store backup of g before updating   */
        solution = sudoku_init();

        do {
            random_i = rand() % 9;
            random_j = rand() % 9;      /* loop until finding valid random variables */
        }while((previous_i == random_i && random_j == previous_j) || g.cells[random_i][random_j].choices[0] == 0);

        g.cells[random_i][random_j].choices[0] = 0;     /* delete the element */

        previous_i = random_i;
        previous_j = random_j;

        if(unique)      /* if unique constraint is applied then we need to check the grid miust have a
                            unique solution. */
        {
            /* copy thre array for testing */
            for(i = 0; i < 9; i++)
                for(j = 0; j < 9; j++)
                    if(g.cells[i][j].choices[0] != 0)
                        solution = grid_update(solution, grid_read_value(g, (Choice_T){i, j, 0}));

            solution = sudoku_solve(solution, (Choice_T){0, 0, 0});    /* find solution */

            if( !grid_unique(solution) )        /* if not a unique solution */
            {
                g = backup;     /* assign backup */
                continue;       /* loop again */
            }
        }

        count--;        /* otherwise decrement count and element is deleted */
    }
    s = sudoku_init();      /* now creating a new puzzle with the required elements and adjusted
 *                             valid choices */

    for(i = 0; i < 9; i++)  /* loop and update the remaining elements */
    {
        for(j = 0; j < 9; j++)
        {
            if(g.cells[i][j].choices[0] != 0)
                s = grid_update(s, grid_read_value(g, (Choice_T){i, j, 0}));
        }
    }

    return s;
}

Grid_T sudoku_solve(Grid_T g, Choice_T c)       /* Sovle g and return the solution; if g has multiple solutions, return one of them.
												   c can help you iterate over all cells in g */
{
    int i, j, k;
    Grid_T solution = g;        /* creating a solution backup grid */

    do{     /* If the puzzle has in each step at least one element with a unique choice,
 *              then our choice was "sure" and we will not need to "try" other options
 *              for the specific element/ cell . In this case it is enough to simply
 *              iterate all the elements of the puzzle , without any "uncertainty"     */
        c = grid_exist_unique(g);
        if(c.n != 0) {
            g = grid_update(g, c);
        }
    }while(c.n != 0);

    if (sudoku_is_correct(g)) {     /* if all the puzzle is sorted then return */
        return g;
    }
    g = grid_clear_unique(g);       /* mark as not a unique solution */
    solution = grid_clear_unique(solution);

    for(i = 0; i < 9; i++)      /* loop and just find the first empty spaces */
    {
        for(j = 0; j < 9; j++)
        {
            if(g.cells[i][j].choices[0] == 0) {
                break;
            }          /* empty space found */
        }
        if( j < 9) {
            break;
        }
    }

    if( i >= 9 )        /* if there is no empty space then return, means -> no solution */
    {
        return g;
    }

    for(k = 1; k <= 9; k++)    /* If the puzzle does not have a solution with a unique choice in each step,
 *                               the choice we make in a step may not lead to a solution.
 *                               So, we should apply it temporarily only, so that if it does not lead to a
 *                               solution, we can try the next possible option. This technique is called
 *                               backtracking and it guarantees us that we will find the solution, if it exists.
 *                               To implement backtracking we use a copy (auxiliary) of the grid, which we "solve"
 *                               recursively using sudoku_solve(). If this helper grid has a solution then we return
 *                               it as the result of the current solve_grid() call otherwise we "throw" it and try
 *                               another option .
 */
    {
        if( g.cells[i][j].choices[k] )  /* found option */
        {
            solution = grid_update(g, (Choice_T){i, j, k});     /* temporarily update */
            solution = sudoku_solve(solution, c);               /* find solution and check if it is valid */
            if (sudoku_is_correct(solution)) {
                return solution;
            }
        }
    }

    return solution;        /* no solution exists */
}

#if DEBUG
void sudoku_print_errors(Grid_T g)				/* Print all row, col, sub-puzzle errors/conflicts found in puzzle g */
{
    int i, j, k, box_i, box_j, count[10], error_count = 0;

    // Check if each element contains a value between 1 and 9
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (g.cells[i][j].choices[0] < 1 || g.cells[i][j].choices[0] > 9) {
                fprintf(stderr, "Cell (row: %d, col: %d) is empty.\n", i, j);
                error_count++;
            }
        }
    }
    // Check each row for repeating values
    for (i = 0; i < 9; i++) {
        // reset the count array
        for(k= 1; k <= 9; k++) {
            count[k] = 0;
        }

        for (j = 0; j < 9; j++) {
            count[g.cells[i][j].choices[0]]++;
        }
        for (k = 1; k <= 9; k++) {
            if (count[k] > 1) {
                fprintf(stderr, "Element: %d is repeated in Row: %d.\n", k, i+1);
                error_count++;
            } else if (count[k] < 1) {
                fprintf(stderr, "Element: %d is not present in Row: %d.\n", k, i+1);
                error_count++;
            }
        }
    }

    // Check each column for repeating values
    for (j = 0; j < 9; j++) {
        // reset the count array
        for (k = 1; k <= 9; k++) {
            count[k] = 0;
        }

        for (i = 0; i < 9; i++) {
            count[g.cells[i][j].choices[0]]++;
        }
        for (k = 1; k <= 9; k++) {
            if (count[k] > 1) {
                fprintf(stderr, "Element: %d is repeated in Column: %d.\n", k, j+1);
                error_count++;
            } else if (count[k] < 1) {
                fprintf(stderr, "Element: %d is not present in Column: %d.\n", k, j+1);
                error_count++;
            }
        }
    }

    // Check each 3x3 subgrid for repeating values
    for (i = 0; i < 9; i += 3) {
        for (j = 0; j < 9; j += 3) {
            // reset the count array
            for(k= 1; k <= 9; k++)
                count[k] = 0;

            for (box_i = i; box_i < i + 3; box_i++) {
                for (box_j = j; box_j < j + 3; box_j++) {
                    count[g.cells[box_i][box_j].choices[0]]++;
                }
            }
            for (k = 1; k <= 9; k++) {
                if (count[k] > 1) {
                    fprintf(stderr, "Element: %d is repeated in Block: %d.\n", k, ((i/3) * 3 + j/3));
                    error_count++;
                } else if (count[k] < 1) {
                    fprintf(stderr, "Element: %d is not present in Block: %d.\n", k, ((i/3) * 3 + j/3));
                    error_count++;
                }
            }
        }
    }

    fprintf(stderr, "Puzzle solution has %d errors.\n", error_count);
}
#endif

int main(int argc, char* argv[])
{
    srand(getpid());    /* random numbers */
    int opt, noFlag = 1, cFlag = 0, unique = 0, nelts = 81;
    Grid_T g, solution;     /* input grid and solution grid */

    while ((opt = getopt(argc, argv, "c^u^g:")) != -1) {        /* iterate over the input flags */
        switch (opt) {
            case 'c':       /* if input flag is -c */
                noFlag = 0;
                cFlag = 1;
                break;
            case 'u':       /* if input flag is -u */
                noFlag = 0;
                unique = 1;     /* mark unique as true */
                break;
            case 'g':       /* if input flag is -g */
                noFlag = 0;
                nelts = atoi(optarg);   /* use next argument as nelts */
                break;
            default:
                noFlag = 1;
        }
    }

    if(noFlag)
        /*
 * reads from stdin a puzzle and

§   prints input puzzle to stderr,

§   solve the puzzle,

§   prints to stderr a message saying whether the puzzle has a single solution, multiple choices, or no solution, and

§   prints to stdout a solution if there is one or any of the puzzles it examined as a possible solution with the errors it presents.*/

    {
        g = sudoku_read();
        fprintf(stderr, "New puzzles:\n");
        sudoku_print(stderr, g);
        solution = sudoku_solve(g, (Choice_T){0, 0, 0});
        if(sudoku_is_correct(solution)) {
            if (grid_unique(solution)) {
                fprintf(stderr, "Puzzle has a (unique choice) solution:\n");
            } else {
                fprintf(stderr, "Puzzle have (multiple choices) solutions:\n");
            }
            sudoku_print(stdout, solution);
            fprintf(stderr, "Puzzle solution is correct.\n");
        } else {
            fprintf(stderr, "Puzzle has no solution:\n");
            sudoku_print(stdout, solution);
            #if DEBUG
                        sudoku_print_errors(solution);
            #endif
        }
    }

    else if(cFlag)
    /*
     * reads from stdin a puzzle and

§   prints input puzzle to stderr,

§   checks if the puzzle is correct, and

§   prints to stderr a message that says whether the puzzle is correct or not, and if not, what its errors are.
     */
    {
        g = sudoku_read();
        fprintf(stderr, "New puzzles:\n");
        sudoku_print(stderr, g);
        if(sudoku_is_correct(g))
        {
            fprintf(stderr, "Puzzle solution is correct.\n");
        }
        else {
            #if DEBUG
                        sudoku_print_errors(solution);
            #endif
        }
    }
    else
    /*
     * produces a new puzzle that has “about” nelts non-empty (zero) elements and

§   prints the puzzle to stdout

§   Without the -u parameter the generated puzzle  may not have  a solution with unique choice steps

§   With the -u parameter the generated puzzle  has  a solution with unique choice steps
     */
    {
        g = sudoku_generate(nelts, unique);
        fprintf(stdout, "New puzzles:\n");
        sudoku_print(stdout, g);
    }


    return 0;
}