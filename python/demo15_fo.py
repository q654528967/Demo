""" myList=[1,2,3]
for tmp in myList:
  print(tmp)
for tmp in range(len(myList)):
  print(tmp,myList[tmp]) """

while True:
  msg=input()
  if msg=="next":
    continue
  print(msg)
  if msg=="exit":
      break