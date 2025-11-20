#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int calculateTotalCost(const vector<vector<int>>& facilities, const vector<vector<int>>& locations, const vector<int>& assignment) {
	int totalCost = 0;
	int n = facilities.size();

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			int facility1 = assignment[i];
			int facility2 = assignment[j];
			int location1 = i;
			int location2 = j;
			
			totalCost += facilities[facility1][facility2] * locations[location1][location2];
		}
	}

	return totalCost;
}

int main() {
	// Facilities cost matrix
	vector<vector<int>> facilities = {
		{0, 2, 3, 1},
		{2, 0, 1, 4},
		{3, 1, 0, 2},
		{1, 4, 2, 0}
	};

	// Flow matrix
	vector<vector<int>> locations = {
		{0, 1, 2, 3},
		{1, 0, 4, 2},
		{2, 4, 0, 1},
		{3, 2, 1, 0}
	};

	int n = facilities.size();

	// Generate initial assignment (0, 1, 2, 3)
	vector<int> assignment(n);
	for (int i = 0; i < n; i++) {
		assignment[i] = i;
	}

	// Calculate the initial total cost
	int minCost = calculateTotalCost(facilities, locations, assignment);
	vector<int> minAssignment = assignment;

	// Generate all permutations of the assignment
	while (next_permutation(assignment.begin(), assignment.end())) {
		int cost = calculateTotalCost(facilities, locations, assignment);
		if (cost < minCost) {
			minCost = cost;
			minAssignment = assignment;
		}
	}

	// Print the optimal assignment and total cost
	cout << "Optimal Assignment: ";
	for (int i = 0; i < n; i++) {
		cout << "F" << (minAssignment[i] + 1) << "->L" << (i + 1) << " ";
	}
	cout << endl;
	cout << "Total Cost: " << minCost << endl;

	return 0;
}
