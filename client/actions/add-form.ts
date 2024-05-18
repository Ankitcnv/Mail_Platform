'use server'

import { redirect } from 'next/navigation';
const AddFormActions = (formData: FormData) => {

    const email = formData.get('email')
    const password = formData.get('password');


    if(email == 'admin@gmail.com' && password == 'admin'){
        redirect(`/home`)
        return {success: true}
    }else{  
            
        return {success: false}
    }
    

}

export default AddFormActions