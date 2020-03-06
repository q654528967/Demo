def outer():
  count=0
  def inner():
    print('count is %d'%(count))
  return inner
func=outer()
func()