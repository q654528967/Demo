def getValue(*list):
  result=0
  for key in range(len(list)):
    if(list[key]>result):
      result=list[key]
  return result

print(getValue(1,2,3,6,8,1,4))

def calc(count):
  if count==0 or count==1:
    return 1
  newCount=count-1
  return count*calc(newCount)

print(calc(0))