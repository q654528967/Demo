try:
  raise(NameError(300))
except NameError as msg:
  print(msg)