#include <iostream>

using namespace std;

int main() {
    double base, height, area;

    cout << "Enter the length of the base of the triangle: ";
    cin >> base;

    cout << "Enter the height of the triangle: ";
    cin >> height;

    if (base < 0 || height < 0) {
        cout << "Invalid input. Base and height cannot be negative." << endl;
    } else {
        area = 0.5 * base * height;
        cout << "The area of the triangle with base " << base << " and height " << height << " is: " << area << endl;
    }

    return 0;
}
