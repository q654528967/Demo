year = int(input('输入年份'))
if year%4==0 and year%100!=0 or year%400==0:
  print(True)
else:
    print(False)