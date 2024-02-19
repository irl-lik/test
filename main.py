
# Отрисовка треугольника
N = 4
triangle = ['*' * (1 + i * 3) for i in range(1, N + 1)]
for i in triangle:
   print(i)

print('\n')

# Отрисовка прямоугольника
rectangle_a = 10
rectangle_b = 4
rectangle = ['*' * rectangle_a for i in range(rectangle_b)]
for i in rectangle:
   print(i)

print('\n')

# Отрисовка посуды
dishes_a = 10
dishes_b = 4
dishes = []
for i in range(dishes_b):
   dishes_row = ''
   if i == dishes_b - 1:
      dishes_row += '*' * dishes_a
   else:
      for j in range(dishes_a):
         if j in [0, dishes_a - 1]:
            dishes_row += '*'
         else:
            dishes_row += ' '
         
   dishes.append(dishes_row)
for i in dishes:
   print(i)