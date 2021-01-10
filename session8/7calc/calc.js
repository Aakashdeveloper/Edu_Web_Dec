 var calcobj = require('../import/first');
 /*function sum(){
                let first = document.getElementById('first').value;
                let second = document.getElementById('second').value;
                let out = Number(first)+Number(second);
                document.getElementById('output').innerText=out;
            }
            function sub(){
                let first = document.getElementById('first').value;
                let second = document.getElementById('second').value;
                let out = first-second;
                document.getElementById('output').innerText=out;
            }*/
            function calc(opt){
                let first = document.getElementById('first').value;
                let second = document.getElementById('second').value;
                let out;
                if(opt=='sum'){
                    out =  Number(first)+Number(second)
                }else{
                    out =  Number(first)-Number(second)
                }
                document.getElementById('output').innerText=out;
            }