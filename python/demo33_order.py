myList=[
  {'title':'apple','count':5,'price':8888},
  {'title':'mi','count':3,'price':2999},
  {'title':'oppo','count':1,'price':1999}
  ]
def sum(myList):
  mySum=0
  for tmp in myList:
    mySum+=tmp.get('count')*tmp['price']
  return mySum


