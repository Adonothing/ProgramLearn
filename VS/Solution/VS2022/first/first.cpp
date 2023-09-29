#include <iostream>

using namespace std;
int main()
{
	//输入商品数量
	int N;
	cin >> N;

	//输入商品价格
	int p[N];
	for (int i = 0; i < N; i++)
	{
		cin >> p[i];
	}

	//计算每个商品优惠价格
	int money[N] = { 0 };
	for (int i = 0; i < N; i++)
	{
		for (int j = i - 1; j >= 0;j--)
		{
			if (p[j] <= p[i])
			{
				money[i] = p[j];
				break;
			}
		}
	}

	//计算总商品优惠价格
	int sum = 0;
	for (int i = 0; i < N; i++)
	{
		sum += money[i];
	}
	cout << sum;

	return 0;
}