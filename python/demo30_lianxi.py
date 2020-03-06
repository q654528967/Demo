myList=[1,2,3,4,5]

try:
  print(myList[12])
except IndexError as msg:
  print(msg)
try:
  print(myList[12])
  raise(IndexError('不存在'))
except IndexError as msg:
  print(msg)


