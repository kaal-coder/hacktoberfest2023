#include <stdio.h>
int main()
{
	int arr1size = 5, arr2size = 5, arr_resultsize, i, j;

	// elements of first Array
	int a[5] = { 1, 2, 3, 4, 5 };

	// elements of Second Array
	int b[5] = { 6, 7, 8, 9, 10 };

	// resultant Array Size Declaration
	arr_resultsize = arr1size + arr2size;
	int c[arr_resultsize];

	// copying array 1 elements into an array
	for (i = 0; i < arr1size; i++) {
		c[i] = a[i];
	}

	// copying array 2 elements into an array
	for (i = 0, j = arr1size;
		j < arr_resultsize && i < arr2size; i++, j++) {
		c[j] = b[i];
	}

	// Array Elements After Merging
	for (i = 0; i < arr_resultsize; i++) {
		printf("%d ", c[i]);
	}
	return 0;
}
