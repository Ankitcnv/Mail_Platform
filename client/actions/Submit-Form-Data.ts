'use server'
const submitFormData = async(formData: FormData) => {

    const subject = formData.get('subject');
    const file = formData.get('file') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    console.log({subject, file, })
    return 'ok'

}

export default submitFormData