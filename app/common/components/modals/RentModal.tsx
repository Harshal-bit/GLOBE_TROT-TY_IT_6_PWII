"use client"
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal"
import {useState , useMemo} from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";

import { FieldValues, useForm } from "react-hook-form";
import CountrySelect from "../inputs/CountrySelect";
import Map from "../Map";

enum STEPS {
    CATEGORY = 0,
    INFO = 1,
    IMAGES = 2,
    DESCRIPTION = 3,
    PRICE = 4
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            location : '',
            guestCount : 1,
            roomCount: 1,
            bathroomCount: 1,
            imgaeSrc: '',
            price : 1,
            title: '',
            description: ''

        }
    });

    const location = watch('location');
    
    const setCustomValue = (id: string, value:any) => {
        setValue(id,value, {
            shouldValidate :true,
            shouldDirty:true,
            shouldTouch :true,
        })
    }

    const onBack = () => {
        setStep((value) => value-1)
    }

    const onNext = () => {
        setStep((value) => value+1)
    }

    const actionLabel = useMemo( () => {
        if(step === STEPS.PRICE) return 'Create'

        return "Next"
    } , [step])

    const secondaryActionLabel = useMemo( () => {
        if(step === STEPS.CATEGORY) return undefined;

        return "Back"
    } , [step])

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading title = "Where is your place?" 
                    subtitle="Help people find your place"
            />
            <CountrySelect value={location} onChange={(value)=>{setCustomValue('location', value)}}
            />
            <Map />
        </div>
    )

    return (  
        <Modal 
            isOpen = {rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={onNext}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined:onBack}
            title="Host your place"
            body={bodyContent}
        />
        
        
    );
}
 
export default RentModal;