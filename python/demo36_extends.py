class Ticket:
  id=0
  content='默认内容'
  def __init__(self,pid,pcontent):
    self.id=pid
    self.content=pcontent
class DeliveryTicket(Ticket):
  sender="默认起手"
  def __init__(self, id, content,sender):
    self.sender=sender
    super().__init__(id,content)

dticket=DeliveryTicket(1,'product1','mike')
print(dticket.id)