func= lambda x:x+1
print(func(3))

myList=[1,2,3,4,5,6,7,8,9]
result=filter(lambda x:x%2==0,myList)
print(list(result))