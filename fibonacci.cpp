#include<iostream>
using namespace std;

int Fib(int n)
{
    if (n == 0 || n == 1)
    {
        return n;
    }
    else {
        return Fib(n-1) + Fib(n-2);
    }
}

int main(){
    int n,j=0;
    cout << "Enter the total number of terms:";
    cin >> n;

    for(int i=1; i<=n; i++)
    {
            int r = Fib(j);
            cout << r << " ";
            j++;
    }
}
