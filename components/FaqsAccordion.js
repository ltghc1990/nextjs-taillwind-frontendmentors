import React,{useState} from 'react'

// div layout- bg->container->

const FaqsAccordion = () => {
  const [selected, setSelected] = useState(null)

  const onClickHandler = (index) => {
    console.log(index)
    if(selected === index){
      setSelected(null)
    } else {
      setSelected(index)
    }
  }

  const bgGradient = {backgroundImage: "linear-gradient(120deg, hsl(273, 75%, 66%), hsl(240, 73%, 65%)"}

  const accordion = data.map((item, index)=>{
    return(
      <div key={index} className="my-1 border-b-2 w-11/12 mx-auto">
        <div className="border-b-2 border-gray-300"> 
        <div className="flex justify-between" onClick={()=>onClickHandler(index)}>
          <p className={`${selected === index ? "font-bold" : "text-md"} pb-3`}>{item.question}</p>
          <p>{selected === index ? "-" : "+"}</p>
        </div>
         
        <p className={`${selected === index ? "block" : "hidden"}`}>{item.answer}</p>
        </div>
      </div>
    )
  })

  return (
    <div style={bgGradient} className=" pt-40 pb-20">
      <div className="bg-gray-200 max-w-sm border-2 mx-auto rounded-3xl shadow-2xl pt-28 pb-8 md:max-w-xl">
        <div className ="relative"> 
          <img className=" -mt-52 absolute left-1/2 transform -translate-x-1/2" src="\images\faq-accordion\illustration-woman-online-mobile.svg"></img>
          <img className="absolute -mt-46 left-1/2 transform -translate-x-1/2 -top-24" src="\images\faq-accordion\bg-pattern-mobile.svg"/>
          <p className="text-center font-bold text-4xl mb-8 tracking-wider">FAQ</p>
        </div>
         
        {accordion}

      </div>
    </div>
  )
}

const data = [
  {
    question: "How many members can I invite?",
    answer: " you can invite as much team members as you want, up to a limit of 20"
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  },
  {
    question: "How do I reset my password",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  },
  {
    question: "Can I cancel my subscription?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  },
  {
    question: "Do you provide additional support?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  }
]

export default FaqsAccordion
