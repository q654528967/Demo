import random
num=int(random.choice(range(1,100)))
print(num)
while True:
  newnum=int(input())
  if newnum == num :
    print('ok')
    break
  elif newnum > num:
    print('green')
  else:
    print('less')