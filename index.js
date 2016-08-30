var katzDeli = []
function takeANumber(line, newperson){
 line.push(newperson)
	return `Welcome, ${newperson}. You are number ${line.length} in line.`

}

function nowServing(line){
 var next = line[0]
 if (line.length > 0){ 
  line.shift()
   return `Currently serving ${next}.`
   
  }
  else
  	{return "There is nobody waiting to be served!"}

}

function currentLine(line){

var str ="The line is currently:"
	if (line.length > 0) {
		var	i=0
 		while (i < line.length){
 			if (i === line.length-1){
 				str += ` ${i+1}. ${line[i]}`
 			}
 			else{
 				str += ` ${i+1}. ${line[i]},`
  			
 			}
 			i++
		}
	return str
 	}
 else
   { 
   	return "The line is currently empty." 
   }
}