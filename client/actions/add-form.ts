'use server'


const AddFormActions = (formData: FormData) => {

    const email = formData.get('email')
    const password = formData.get('password');

    console.log(" data: " , {email, password})

}

export default AddFormActions