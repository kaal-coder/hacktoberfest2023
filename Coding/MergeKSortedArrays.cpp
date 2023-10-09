
#include <bits/stdc++.h> 
using namespace std; 
#define N 4 

void printArray(int arr[], int size) 
{ 
	for (int i = 0; i < size; i++) 
		cout << arr[i] << " "; 
} 


void mergeKArrays(int arr[][N], int a, int output[]) 
{ 
	int c = 0; 

	for (int i = 0; i < a; i++) { 
		for (int j = 0; j < N; j++) 
			output = arr[i][j]; 
	} 

	sort(output, output + N * a); 
} 

// Driver's code 
int main() 
{ 
	int arr[][N] = { { 2, 6, 12, 34 }, 
					{ 1, 9, 20, 1000 }, 
					{ 23, 34, 90, 2000 } }; 
	int K = sizeof(arr) / sizeof(arr[0]); 

	int output[N * K]; 

	mergeKArrays(arr, 3, output); 

	cout << "Merged array is " << endl; 
	printArray(output, N * K); 

	return 0; 
}
