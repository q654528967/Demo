class Test:
  def myFunc(self):
    print(' it is test')

class MyClass(Test):
  def myFunc(self):
    print('it is a new test')

obj=MyClass()
obj.myFunc()
