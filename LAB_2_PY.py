import math
from datetime import date

today = date.today()

x = float(input("Enter a x value: "))
c = float(input("Enter a c value: "))
a = float(input("Enter an a value: "))
b = float(input("Enter a b value: "))

y = None
error = False

if x <= a:
    if x - c <= 0:
        print("Помилка: підлогарифмічний вираз має бути більше 0")
        error = True
    else:
        y = math.log(x - c)
elif x < b and x > a:
    y = x + c
elif x >= b and x > a:
    if c == 0:
        print("Помилка: ділення на нуль")
        error = True
    else:
        y = x / c
else:
    print("Некоректні вхідні дані")
    error = True

if not error:
    under_root = y**2 - math.sin(y)
    if under_root < 0:
        print("Помилка: вираз під коренем від’ємний")
    else:
        z = math.sqrt(under_root)
print(f"Лабораторна робота №2 \nНікітін Михайло         (№ 142Б)\n{today}")
print(f"x = {x} \nc = {c} \na = {a} \nb = {b}\ny = {y} \nz = {z}")