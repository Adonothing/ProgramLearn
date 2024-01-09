int main()
{
	// 定义常量
	int a = 1;
	int b = 2;
	int t_0 = 0;
	int t_end = 100;

	// 定义变量
	int t = 0;
	int x_t = 0;

	// 循环体
	for (t = t_0; t < t_end; t = t + 1)
	{
		x_t = a * x_t + b;
	}

	// 复位
	t = 0;
}