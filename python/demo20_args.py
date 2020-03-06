def indexOf(myList,index,*start):
  if len(start)>0:
    for key in range(start[0],len(myList)):
      if(myList[key]==index):
        return myList[key]
      else:
        return -1
  else:
    for key in range(len(myList)):
      if(myList[key]==index):
        return myList[key]
      else:
        return -1
result=indexOf([100,200,300,400],200,2)
print(result)