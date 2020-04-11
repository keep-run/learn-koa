import React from "react";

export default function() {
  const test1 = () => {
    console.log("------test1-------");
    return 2
  };

  const test = async() => {
    console.log("------start------");
    setTimeout(() => {
      console.log("----------setTimeout1-------");
    }, 0);

    new Promise(async(reslove)=>{
      await test1()
      reslove()
    }).then(res=>{
      console.log("------await promise--------");
    })

    new Promise(reslove => {
      console.log("------promise--------");
      reslove();
    })
      .then(() => {
        console.log("------then1--------");
      })
      .then(() => {
        console.log("------then2--------");
      });

    Promise.resolve().then(res => {
      console.log("------then3--------");
    });

    new Promise(reslove => {
      setTimeout(() => {
        console.log("----------setTimeout2-------");
        reslove(5);
      }, 0);
    }).then(res => {
      console.log("------then4--------");
    });

    console.log("-------end--------");
  };
  // test();
  const Demo=(a)=>{
    // this.b=a
    console.log('-----------this-----------',this)
    return {a:a}
  }
const demo=new Demo(5)
console.log('-------demo--------',demo)
  return <div>event-Loop 测试</div>;
}
