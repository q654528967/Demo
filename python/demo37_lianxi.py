class Student:
  name=''
  uid=0
  def __init__(self,name,uid):
    self.name=name
    self.uid=uid
  def study(self):
    print('学号为%d的学生%s正在上课'%(self.uid,self.name))

stu1=Student('jack',1)
stu1.study()
class Doctor(Student):
  def __init__(self, name, uid):
    super().__init__(name, uid)
  def publish(self):
    print('%s发布了一篇论文'%(self.name))

ddd= Doctor('zhangsan',1)
ddd.study()