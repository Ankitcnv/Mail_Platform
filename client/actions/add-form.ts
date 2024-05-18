'use server'


const AddFormActions = (formData: FormData) => {

    const email = formData.get('email')
    const password = formData.get('password');

    console.log({email, password})

}

export default AddFormActions