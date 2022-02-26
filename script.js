var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function SpeakGoodbye (name) {
	console.log("Goodbye " + name)
}

function SpeakHello (name) {
	console.log("Hello " + name)
}

for (var name in names) {
	if(names[name].charAt(0) === "J" || names[name].charAt(0) === "j") {
  SpeakGoodbye(names[name]);
  } else {
  	SpeakHello(names[name])
  }
}