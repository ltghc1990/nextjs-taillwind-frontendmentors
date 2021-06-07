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
  return (
    // makes sure the container is centered horizontally and vertically
    <div className="bg-blue-900 h-screen pt-20 flex flex-col justify-center items-center ">
      <div className="bg-gray-200 p-10 rounded-xl pt-24">
        <div className="relative -mt-52">
          <img  className=" border-2 border-yellow-900 shadow" src="\images\faq-accordion\illustration-woman-online-mobile.svg"></img>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold p-8">FAQ</p>
          <div>
            {data.map((item, index)=>{
              return(
                <div className="my-1 border-b-2 flex">
                  <div onClick={()=>onClickHandler(index)}>
                    <p className={`${selected === index ? "text-bold" : "text-md"} border-b-2 border-gray-400`}>{item.question}</p>
                    <p className={selected === index ? "block" : "hidden"}>{item.answer}</p>
                  </div>
                  <div>
                    <p className="hidden">ICON</p>
                  </div>
                </div>
              )
            })}
          </div>
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
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your alloted storage space"
  }
]

export default FaqsAccordion
