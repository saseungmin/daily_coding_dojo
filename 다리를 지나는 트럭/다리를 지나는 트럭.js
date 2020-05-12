        const result = solution(100,100,[10,10,10,10,10,10,10,10,10,10]	)
        console.log(result);

        function solution(bridge_length, weight, truck_weights) {
            let answer = 0;
            let bridge = [];
            let after_bridge = [];
            let count = 0;
            const length = truck_weights.length;

            while(after_bridge.length !== length){
                let sum = 0;
                answer++;
                const my_truck = truck_weights.shift();
                if(bridge.length > 0){
                    for(let i=0; i<bridge.length; i++){
                        sum += bridge[i].my_truck;
                    }
                }
                if(sum+my_truck <= weight){
                    bridge.push({my_truck : my_truck, count : 0});      
                }else if(sum+my_truck > weight){
                    truck_weights.unshift(my_truck);
                }
                //console.log(bridge);

                for(let i =0; i<bridge.length; i++){
                        bridge[i].count += 1;
                } 
                if(bridge[0].count === bridge_length){
                    const out_bridge = bridge.shift();
                    after_bridge.push(out_bridge.my_truck);

                }
               //console.log(after_bridge);
            }
            return answer+1;
        }
