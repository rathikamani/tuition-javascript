
        //variable example
        var a = 10;
        function test(){
            var b = 20;
            var a = 30;
            console.log('1',a);
            console.log('2',b);
        }
        test();
        console.log(a);
        //console.log(b); // error

        // let example
        let str= 'cat';
        if(true){
            let str = 'cow'
            console.log(str); // cow
            let str1 = 'milk'
        }
        console.log(str);
        //console.log(str1); // error

        // const example
        const location = 'chennai'
        console.log(location);
  