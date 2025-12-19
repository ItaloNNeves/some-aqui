function clicar() {
           let nt1 = document.getElementsByClassName("num1")[0]
      let nt2 = document.getElementsByClassName("num2")[0]
      let res = document.getElementsByClassName("resultado")[0]
      let n1 = Number(nt1.value)
      let n2 = Number(nt2.value)
        if (!isNaN(n1) && !isNaN(n2)) {


        let soma = n1 + n2
        res.innerHTML = ` A soma de ${n1} + ${n2} é ${soma}.`
        } else{
             let res = document.getElementsByClassName("resultado")[0]
            res.innerHTML = "Digite somente Números"
        }

       }