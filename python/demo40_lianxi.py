class Monester:
  hp=0
  name='monester'
  def __init__(self,hp=100):
    self.hp=hp
  def whoAmI(self):
    print('我是monser,hp%d'%(self.hp))

monester=Monester()
monester.whoAmI()
class Boss(Monester):
  name=''
  def __init__(self,name,hp):
    self.name=name
    super().__init__(hp)
  def whoAmI(self):
    print('我是%s,hp%d'%(self.name,self.hp))

boss=Boss('lei',100)
boss.whoAmI() 