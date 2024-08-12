import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutStepper = ({ stepsConfig = [] }) => {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)
    const [isComplete, setIsComplete] = useState(false)
    const [isAgreed, setIsAgreed] = useState(false); 

    const handleNext = () =>{
        setCurrentStep(prevStep=> {
            if(currentStep === stepsConfig.length){
                if (!isAgreed) return prevStep;
                setIsComplete(true);

                navigate("/")
                return prevStep
            }else{
                return currentStep +1;
            }

        })
    }
    const handleBack = () => {
        setCurrentStep(prev => {
            if (prev === 1) { // No change if it's the first item
                return prev;
            } else {
                return prev - 1; // Decrement the current step
            }
        });
    };
    
    const ActiveComponent = stepsConfig[currentStep - 1]?.Component;
     const calculateProgressBar = () =>{
        return ((currentStep -1)/(stepsConfig.length - 1)) * 100;
     }
    return (
        <div className='d-flex flex-column gap-3'>
        <div className='icons  d-flex justify-content-between'>
            {
                stepsConfig.map((item, index) => (
                    
                    <div className={`${currentStep> index+1 || isComplete ? "Complete": ""}
                    ${currentStep === index + 1 ? 'active': ''}
                    `} key={index}>
                        <div className='i'>

                        {item.name}
                        </div>

                    </div>
                ))
            }
            <div className='progress-bar'>
                <div className="progress" style={{width: `${calculateProgressBar()}%`}} ></div>

            </div>
        </div>
        {ActiveComponent && (
                <ActiveComponent onAgreedChange={setIsAgreed} /> // Pass callback to ActiveComponent
            )}
        <div className='d-flex justify-content-between'>

        
        {
            !isComplete &&
            <button className='btn btn-primary' onClick={handleBack}>Back</button>
        }
         {!isComplete && (
                    <button
                        className='btn btn-primary'
                        onClick={handleNext}
                        disabled={currentStep === stepsConfig.length && !isAgreed} // Disable if not agreed
                    >
                        {currentStep === stepsConfig.length ? "Finish" : "Next"}
                    </button>
                )}
       </div>
            </div>
    )
}

export default CheckoutStepper