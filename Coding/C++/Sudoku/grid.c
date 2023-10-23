#include <stdlib.h>
#include <stdio.h>
#include "grid.h"

Grid_T grid_init(Grid_T g, int v[9][9])
{
    int i, j;

    for (i = 0; i < 9; i++)
    {
        for (j = 0; j < 9; j++)
        {
            if(v[i][j] != 0)
                g = grid_update(g, (Choice_T){i, j, v[i][j]});
        }
    }

    return g;
}

Grid_T grid_update(Grid_T g, Choice_T c) {
    int i = c.i;
    int j = c.j;
    int n = c.n;

    // Update the cell (i, j) with the value n
    if(g.cells[i][j].choices[n]) {
        g.cells[i][j].count--;
    }

    g.cells[i][j].choices[n] = 0;
    g.cells[i][j].choices[0] = n;

    // Remove the value n from the possibilities for the row, column, and box
    for (int k = 0; k < 9; k++) {
        if(g.cells[i][k].choices[n] == 1)
            g.cells[i][k].count--;
        g.cells[i][k].choices[n] = 0;

        if(g.cells[k][j].choices[n] == 1)
            g.cells[k][j].count--;
        g.cells[k][j].choices[n] = 0;
    }

    int box_i = (i / 3) * 3;
    int box_j = (j / 3) * 3;
    for (int x = box_i; x < box_i + 3; x++) {
        for (int y = box_j; y < box_j + 3; y++) {
            if(g.cells[x][y].choices[n] == 1)
                g.cells[x][y].count--;
            g.cells[x][y].choices[n] = 0;
        }
    }

    return g;
}

Choice_T grid_iterate(Grid_T g, Choice_T t) {
    int i = t.i;
    int j = t.j;
    int k, r;

    if( g.cells[i][j].count <= 0 ) {
        return (Choice_T) {0, 0, 0};
    }

    if(g.cells[i][j].count == 1)
    {
        for (k = 1; k <= 9; k++)
        {
            if (g.cells[i][j].choices[k])
            {
                g.cells[i][j].choices[k] = 0;
                g.cells[i][j].count--;
                return (Choice_T){i, j, k};
            }
        }
    }

    do{
        r = rand() % 9 + 1;
        if(g.cells[i][j].choices[r]) {
            g.cells[i][j].choices[r] = 0;
            g.cells[i][j].count--;
            return (Choice_T) {i, j, r};
        }
    }while( !g.cells[i][j].choices[r] );

    return (Choice_T){ 0, 0, 0 };
}

int grid_unique(Grid_T g)
{
    return g.unique;
}

Choice_T grid_read_value(Grid_T g, Choice_T c)
{
    return (Choice_T){c.i, c.j, g.cells[c.i][c.j].choices[0]};
}

Grid_T grid_clear_unique(Grid_T g)
{
    g.unique = 0;
    return g;
}

Choice_T grid_exist_unique(Grid_T g)
{
    int i, j, k;

    for (i = 0; i < 9; i++)
    {
        for (j = 0; j < 9; j++)
        {
            if (g.cells[i][j].count == 1 && g.cells[i][j].choices[0] == 0)
            {
                for (k = 1; k <= 9; k++)
                {
                    if (g.cells[i][j].choices[k])
                    {
                        return (Choice_T){i, j, k};
                    }
                }
            }
        }
    }

    return (Choice_T){0, 0, 0};
}




#ifdef DEBUG
void grid_cell_print(FILE *stream, Grid_T g, Choice_T c)
{
    int i;

    fprintf(stream, "(%d,%d): ", c.i, c.j);
    for (i = 1; i <= 9; i++)
    {
        if (g.cells[c.i][c.j].choices[i])
        {
            fprintf(stream, "%d ", i);
        }
    }
    fprintf(stream, "\n");
}
#endif