#El usuario envía el valor correcto, devuelve "¡Lo conseguiste!".
#El usuario envía un número más alto, devuelve "¡La suposición fue demasiado alta!".
#El usuario envía un número más bajo, devuelve "¡La suposición fue demasiado baja!".

#solucion numero 1
def adivina_numero valor
    number = 25
    if valor == number
        puts "¡Lo conseguiste!"
    elsif valor > number
        puts "¡La suposición fue demasiado alta!"
    elsif valor < number
        puts "¡La suposición fue demasiado baja!"
    end


end
adivina_numero 30


