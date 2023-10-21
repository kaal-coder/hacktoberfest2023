#include <stdio.h>
#include <stdlib.h>
#define MAX_PAGES 100
#define MAX_FRAMES 10
int main()
{
    int pages[MAX_PAGES], frames[MAX_FRAMES];
    int num_pages, num_frames, num_hits = 0, num_misses = 0;
    int i, j, k, pos, max_pos, max_dist;
    printf("Enter the number of pages: ");
    scanf("%d", &num_pages);
    printf("Enter the page references: ");
    for (i = 0; i < num_pages; i++) {
        scanf("%d", &pages[i]);
    }
    printf("Enter the number of frames: ");
    scanf("%d", &num_frames);
    for (i = 0; i < num_frames; i++) {
        frames[i] = -1;
    }
    for (i = 0; i < num_pages; i++) {
        for (j = 0; j < num_frames; j++) {
            if (frames[j] == pages[i]) {
                num_hits++;
                break;
            }
        }
        if (j == num_frames)
        {
            num_misses++;
            max_pos = -1;
            max_dist = -1;
            for (j = 0; j < num_frames; j++)
            {
                pos = -1;
                for (k = i+1; k < num_pages; k++)
                {
                    if (frames[j] == pages[k])
                    {
                        pos = k;
                        break;
                    }
                }
                if (pos == -1)
                {
                    max_pos = j;
                    break;
                }
                else if (pos > max_dist)
                {
                    max_pos = j;
                    max_dist = pos;
                }
            }
            frames[max_pos] = pages[i];
        }
    }
    printf("Number of page hits: %d\n", num_hits);
    printf("Number of page misses: %d\n", num_misses);
    printf("Hit ratio: %.2f\n", (float)num_hits/num_pages);
    printf("Miss ratio: %.2f\n", (float)num_misses/num_pages);
    return 0;
}