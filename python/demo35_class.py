class Order:
  id=0
  price=0
  content=''
  def __init__(self,id,price,content):
    self.id=id
    self.price=price
    self.content=content

  def printOrder(self,time):
    print('打印小票'+time)
    print('订单编号为%d的订单价格是%d,订单内容是%s'%(self.id,self.price,self.content))

myOrder= Order(12,200,'麻辣烫')
print(myOrder.price)
myOrder.printOrder('14:41')
