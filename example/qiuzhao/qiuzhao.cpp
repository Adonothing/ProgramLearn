#include <iostream>
#include <algorithm>
#include <string>
#include <unordered_map>

using namespace std;


// 函数用于计算阶乘
long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


// 函数用于计算大写字符串的排列数
long long calculatePermutations(const string& uppercaseString) {
    unordered_map<char, int> charCount;

    // 统计每个大写字符的出现次数
    for (char c : uppercaseString) {
        charCount[c]++;
    }

    long long permutations = 1;

    // 计算排列数
    for (const auto& entry : charCount) {
        int count = entry.second;
        permutations *= factorial(count);
    }

    return permutations;
}

int main() {
    string uppercaseString;

    // 读取一行大写字符串
    getline(cin, uppercaseString);

    // 计算排列数
    long long permutations = calculatePermutations(uppercaseString);

    // 输出排列数
    cout << "排列数: " << permutations << endl;

    return 0;
}
