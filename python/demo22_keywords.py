#默认值参数
def myFunc(arg1,arg2=6):
  print(arg1,arg2)

myFunc(2)
myFunc(5)
myFunc(6)
myFunc(2,5)
#g关键字参数
def keyWord(arg1,arg2):
  print(arg1,arg2)
keyWord(arg2=10,arg1=2)