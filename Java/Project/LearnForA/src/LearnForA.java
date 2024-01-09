public class LearnForA {
    public static void main(String[] args) {
        // 定义常量
        int a = 1;
        int b = 2;
        int t_0 = 0;
        int t_end = 100;

        // 定义变量
        int tJava = 0;
        int x_t = 0;

        // 循环体
        for (tJava = t_0; tJava < t_end; tJava = tJava + 1)
        {
            x_t = a * x_t + b;
        }

        // 复位
        tJava = 0;
    }
}