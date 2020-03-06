#print(myAge)
try:
  print(myAge)
except NameError:
  print('调用了未定义的变量')
print('程序执行结束')
try:
  age=int(input('输入年龄'))
  print(age,score)
except ValueError as msg:
  print('输入的值不符合要求',msg)
except NameError as msg:
  print('你调用了不存在的变量',msg)
""" except Exception as msg:
  print('err',msg) """