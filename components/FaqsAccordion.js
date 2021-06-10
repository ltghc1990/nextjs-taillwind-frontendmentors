import React,{useState} from 'react'

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

  const bgGradient = {backgroundImage: "linear-gradient(180deg, hsl(273, 75%, 66%), hsl(240, 73%, 65%)"}

  const accordion = data.map((item, index)=>{
    return(
        <div key={index} className="border-b-2 border-gray-300 pt-4"> 
          <div className="flex justify-between cursor-pointer" onClick={()=>onClickHandler(index)}>
            <p className={`${selected === index ? "font-bold" : "text-md"} pb-3 hover:text-yellow-600`}>{item.question}</p>
            <p className="cursor-pointer transform hover:scale-150">{selected === index ? "-" : "+"}</p>
          </div>
          <p className={`${selected === index ? "block" : "hidden"} pb-2`}>{item.answer}</p>
        </div>
    )
  })

  return (
    <div style={bgGradient} className="h-screen pt-40 lg:pt-20 overflow-hidden ">
      <div className=" bg-gray-200 border-2 max-w-sm mx-auto rounded-3xl shadow-2xl pt-28 pb-8 sm:max-w-xl lg:max-w-screen-md lg:flex lg:py-12 lg:px-8 xl:max-w-screen-lg">
        <div className ="relative lg:w-1/2"> 
          <img className="-mt-52 absolute z-50 left-1/2 transform -translate-x-1/2 lg:mt-0 lg:w-11/12 lg:top-1/2 lg:-translate-y-1/2 lg:left-1/3" src="\images\faq-accordion\illustration-woman-online-mobile.svg"></img>
          <img className="absolute -mt-46 left-1/2 transform -translate-x-1/2 -top-24 lg:w-11/12 lg:top-1/2 lg:-translate-y-1/6 lg:left-1/3" src="\images\faq-accordion\bg-pattern-mobile.svg"/>
        </div>
        <div className="my-1 border-b-2 w-11/12 mx-auto lg:w-1/2">
          <p className="text-center font-bold text-4xl mb-8 tracking-wider lg:text-left lg:mb-4">FAQ</p>
          {accordion}
        </div>
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
