using System;
using System.Collections.Generic;

public interface IAnimal
{
      public void Eat();
      public void Sleep();
      public void Play();
}

public abstract class Mammal
{
      public abstract bool LivesInLand();
      public abstract bool HasHair();
      
      public bool BornFromMother()
      {
            return true;
      }
}

public class Cat: Mammal, IAnimal
{
      public override bool HasHair()
      {
            return true;
      }
      
      public override bool LivesInLand()
      {
            return true;
      }

      public void Eat()
      {
            Console.WriteLine("cat is eating");
      }
      
      public void Sleep()
      {
            Console.WriteLine("cat is sleeping");
      }
      
      public void Play()
      {
            Console.WriteLine("cat is playing");
      }
}

public class Dog: IAnimal
{
      private string name;
      
      public Dog()
      {
            this.name = "solovino";
      }
      
      public Dog(string name)
      {
            this.name = name;
      }
      
      public virtual void Bark()
      {
            Console.WriteLine(this.name + " is barking");
      }
      
      public string GetName()
      {
            return this.name;
      }
      
      public void SetName(string name)
      {
            this.name = name;
      }
      
      public void Eat()
      {
            Console.WriteLine(this.name + " is eating");
      }
      
      public void Sleep()
      {
            Console.WriteLine(this.name + " is sleeping");
      }
      
      public void Play()
      {
            Console.WriteLine(this.name + " is playing");
      }
}

public class HerdingDog: Dog
{
      public HerdingDog(string name): base(name){
      }
      
      public void Herd()
      {
            Console.WriteLine(this.GetName() + " is herding");
      }
      
      public override void Bark()
      {           
            Console.WriteLine(this.GetName() + " is barking very loud");
      }
}

public class ShitzuDog: Dog
{
      public ShitzuDog(string name): base(name){
      }

      public override void Bark()
      {
            Console.WriteLine(this.GetName() + " is barking very annoyingly");
      }
}
                              
public class Program
{     
      public static void Main()
      {
            Dog fluffy = new Dog("fluffy");
/*          fluffy.Bark();
            fluffy.SetName("blabla");
            fluffy.Bark();*/
            
            HerdingDog firulais = new HerdingDog("firulais");
/*          firulais.Bark();
            firulais.Herd();*/
            
            List<IAnimal> animalList = new List<IAnimal>();
            animalList.Add(fluffy);
            animalList.Add(firulais);
            animalList.Add(new Dog("fido"));
            animalList.Add(new ShitzuDog("leia"));
            animalList.Add(new Cat());
            
            foreach(IAnimal animal in animalList)
            {
                  animal.Eat();
            }
      }
}
