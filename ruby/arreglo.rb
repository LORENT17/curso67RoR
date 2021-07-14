
array = ["Gato", "Perro", "Conejo", "Pavo", "Morrocoy"]

#.at or .fetch
#puts array.to_s #me devuelve todo el array
puts array.at(-4) #accede a la posicion en reversa 
puts array.fetch(3) #accede a la posicion[i] del arreglo


#.delete
#eliminar un elemento del arreglo
array.delete('Perro')
puts array.to_s
#eliminar un elemento del arreglo por posicion
array.delete_at(0)
array.insert(3,'Osito')
puts array.to_s

#.reverse
puts array.reverse.to_s #me duelve los valores del arreglo en reversa

#.length
puts array.length #cuenta las posiciones del arreglo (tamño)

#.sort / ordena el arreglo
puts array.sort!.to_s
puts array.to_s

#.slice

#.shuffle / desordena el arreglo
puts array.shuffle!.to_s
puts array.to_s

#.join
#.insert
#values_at() -> devuelve un arreglo con los valores específicados en los parametros. 
#e.g. a = %w{gato perro oso}; puts a.values_at(1,2).join(' and ') #=> "perro y oso"


