=begin puts "hola mundo de Ruby"

puts "24 + 8 es #{24 + 8}"
arr = ["I", "code", "therefore", "I", "am"]
for i in 0...arr.count
  puts arr[i]
end

3.times { puts "WOW" }

24.class
puts "tipo dato: #{24.class}"

x = "hello world"
puts x 

first_name = "Lorent"
last_name = "Santiago"
puts "Tú nombre es :", first_name, last_name 


#para que el nombre me salga en una sola linea y separado
first_name = "Lorent"
last_name = "Santiago"
puts "Tú nombre es:" + first_name +" "+ last_name

puts "First name is #{first_name} and Last name is #{last_name}"
puts "First name is %s and Last name is %s" % [first_name, last_name]

z = 50
puts "Value of Z is: #{z}"
puts "Value of Z is: %s" % [z]
=end

#Me arroja todo el valor del arreglo
=begin x = "CodingDojo"
puts x.length

puts "Yo soy un String"
puts "Yo soy una instancia de la clase ".class #devuelve String
puts String.new("Yo soy una instancia de la clase String.")

puts "24 + 8 es #{24 + 8}" 
puts "24 + 8 es " + (24 + 8).to_s

puts "".empty? 
puts "hola".empty?
puts "hola".length 


puts "hola".split
puts "hola".split("")
puts "oscar@gmail.com".split("@")

str = "bar"
str[0] = "c"
puts str

word = "hola"
word.capitalize
puts word 

word.capitalize!
puts word 

x = "CodingDojo"
puts x.capitalize
=end
=begin
x = 1
if x>2
  puts "x is greater than 2"
elsif x<2 and x>0
  puts "x is 1"
else
  puts "I can´t guess the number"
end 
=end 

=begin
x = 5
puts "X is not 2" if x!=2
puts "X is greater than 2" if x > 2

age = 22
if age >= 21
  puts "Bienvenido a la fiesta."
else
  puts "Todavía no."
end

if !(age < 21)
  puts "Bienvenido a la fiesta."
else
  puts "Todavía no."
end


unless age < 21
  puts "Bienvenido a la fiesta."
else
  puts "Todavía no."
end


number = 15
if number % 3 == 0 && number % 5 == 0
  puts "FizzBuzz"
elsif number % 3 == 0
  puts "Fizz"
elsif number % 5 == 0
  puts "Buzz"
end


if ""
  puts "Soy positivo."
end
if 0
  puts "Soy positivo."
end

unless nil
  puts "Soy negativo."
end
unless false
  puts "Soy negativo."
end


puts "Soy positivo." if "hello"
puts "Soy positivo." if 24
puts "Soy negativo" unless nil
puts "Soy negativo" unless false
=end

#bucles
=begin
i = 0
num = 5
while i < num do
   puts "Dentro del bucle i = #{i}"
   i +=1 #va guardando el valor
end

i = 0
num = 5
while i < num do
  puts "Dentro del bucle i = #{i}"
  i += 1  
  break if i == 2  
end


for i in 0..5 
  puts "El valor de la variable local es #{i}" 
end
#Podemos utilizar break para detener el bucle for antes que llegue al final, de la misma manera que lo haríamos con el bucle while.
for i in 0..5 
  puts "El valor de la variable local es #{i}" 
  break if i == 2
end
#Otro método útil es next. Utilizaremos next, si en lugar de terminal de bucle for, queremos saltar al siguiente índice.
for i in 0..5 
  next if i == 2
  puts "El valor de la variable local es #{i}"   
end

#terminar bucles
=end
=begin
def hola_mundo
  puts "Las clases de Ruby son interesantes"
end
hola_mundo #llama a la funcion 

def saludar nombre1, nombre2
  puts "Hola, #{nombre1} y #{nombre2}"
end
saludar "Oscar", "Eduardo" # => "Hola, Oscar y Eduardo"

#Podemos pasar parámetro de la misma forma que lo haríamos en cualquier otro lenguaje. 
#Para funciones con muchos parámetros, utilice paréntesis para facilitar la lectura.
def saludar(nombre1, nombre2)
  puts "Hola, #{nombre1} y #{nombre2}"
end
saludar("Oscar", "Eduardo") # => "Hola, Oscar y Eduardo"

def saludar nombre1="Oscar", nombre2="Shane"
  puts "Hola, #{nombre1} y #{nombre2}"
end
saludar "Oscar"    # => "Hola, Oscar y Shane"

def saludar nombre1, nombre2
  if nombre1.empty? or nombre2.empty?
    return "¿Quién eres?"
  end
  # No ejecuta esta línea porque utilizamos return anteriormente
  "Hola, #{nombre1} y #{nombre2}"
end
puts saludar "", ""
=end

puts "Ruby! " * 2






















