def calc():
  myList=[]
  count=0
  print(1)
  while True:
    myInput= input('输入数字,end结束')
    if myInput=='end':
      for key in range(len(myList)):
        count += int(myList[key])
      print(count)
    else:
      myList.append(int(myInput))
calc()  