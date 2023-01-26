using System;
using System.Threading;

public class Program {
  public static void MyFunc() {
    Console.WriteLine("ran");
    Thread.Sleep(1000);
    Console.WriteLine("done");
    Thread.Sleep(850);
    Console.WriteLine("really done");
  }
    
  public static void Main() {
    Thread th = new Thread(new ThreadStart(MyFunc));
    th.Start();
    Console.WriteLine(System.Diagnostics.Process.GetCurrentProcess().Threads.Count);
    Thread.Sleep(1200);
    Console.WriteLine("finally done");
  }
}
