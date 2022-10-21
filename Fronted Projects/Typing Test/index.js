const setWords=["Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                        "Quae tenetur accusamus distinctio voluptate! Ratione est,",
                        "consequatur repudiandae ipsam libero itaque quisquam tempora eveniet enim ipsa aliquid",
                        " exercitationem voluptatem velit porro.",
                        "Dolor rerum quasi quas eveniet pariatur excepturi hic suscipit",
                        "saepe beatae, aspernatur mollitia aperiam consectetur dolores",
                        "necessitatibus provident quam dolorum?" ];

        const msg=document.getElementById('msg');
        const typewords=document.getElementById('mywords');
        const   btn=document.getElementById('btn');
        let stt,ent;

     const   playGame=()=>{
            let ranNum=Math.floor(Math.random() * setWords.length);
            msg.innerText=setWords[ranNum];
            let date=new Date();
            stt=date.getTime();
            btn.innerText="Done";     

        }
      const endPlay=()=>{
           let date=new Date();
           ent=date.getTime();
           let tot=((ent-stt)/1000);
           let totstr=typewords.value;
            let wordcnt=wordCount(totstr);
            let speed=Math.round((wordcnt/tot)*60);
            let finalMsg=`You typed total at ${speed} words per minutes`;
            finalMsg+=compare(msg.innerText,totstr);
            msg.innerText=finalMsg;


            
      } 

      const compare=(str,str2)=>{
        let w1=str.split(" ");
        let w2=str2.split(" ");
        let cnt=0;
        w1.forEach(function(item,index) {
            if(item==w2[index])
            cnt++;
        });

        let errw=(w1.length-cnt);
        return (`${cnt} correct out of ${w1.length} words and the total number of error are ${errw} .`);
      }
    

const wordCount=(str)=>{
    let response=str.split(" ").length;
    console.log(response);
    
    return response;
}

        btn.addEventListener('click',function(){
            console.log(this);
              if(this.innerText=='Start')
              {
                typewords.disabled=false;
                playGame();
              }
              else if(this.innerText=='Done')
              {
                   typewords.disabled=true;
                   btn.innerText="start";
                   endPlay();

              }
        })