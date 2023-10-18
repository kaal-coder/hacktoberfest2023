#include <iostream>
#include <vector>

using namespace std;

void sieve (vector<bool>& isPrime)
{
    int upperLimit = isPrime.size() - 1;
    
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i*i <= upperLimit; ++i)
    {
        if (isPrime[i]) 
        {
            for (int j = i*i; j <= upperLimit; j += i)
            {
                isPrime[j] = false;
            }
        }
    }
}

int main()
{
    cout << "Enter the number till which you want to know all the primes: ";
    int userInput;
    cin >> userInput;
    
    vector<bool> isPrime (userInput + 1, true);
    sieve (isPrime);
    
    cout << "All the primes till " << userInput << ": " << endl;
    for (int currentNumber = 2; currentNumber <= userInput; ++currentNumber)
    {
        if (isPrime[currentNumber])
        {
            cout << currentNumber << ' ';
        }
    }
    cout << endl;
    
    return 0;
}
