let maquina1 = prompt(" informe a Produção da máquina 1")
let maquina2 = prompt(" informe a Produção da máquina 2")

if (maquina1 > maquina2) {
    alert("Máquina 1 produziu mais, maq 2 t abaixo")
} else if (maquina2 > maquina1) {
    alert("Máquina 2 produziu mais, maq 1 ta abaixo")
} else {
    alert("Empate, tanto faz")
}