#l(local)>e(embedded嵌套函数作用域)>g(global)>b(built-in内置作用域对象)
count=10
def test():
  #count=3
  global count
  count-=1
  print('count is %d'%(count))

test()
print('global count is %d'%(count))