import React from 'react'

import { useFormik } from 'formik';

export default function UserForm() {

    const  initialValues = {
        name:'',
        email:'',
        channel_name:''
    }
    const  onSubmit =  values => {
        console.log('Form Data', values);
    }
    const validate = values => {

        let errors ={}

        if(!values.name){
            errors.name = 'Rrquired'
        }
        if(!values.email){
            errors.email = 'Required'
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
            errors.email='Invalid email'
        }
        if(!values.channel_name)
        {
            errors.channel_name='Required'
        }

        return errors;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate

    })

console.log('Form Values', formik.errors)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" 
                    {...formik.getFieldProps('name')}/>
                    
                    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                    
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="channel_name">Channel name</label>
                    <input type="text" name="channel_name" 
                    id="channel_name" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.channel_name}/>
                    <br/>    
                    {formik.touched.channel_name && formik.errors.channel_name ? <div>{formik.errors.channel_name}</div> : null}
                </div>
                <button>Submit</button>    
            </form>
        </div>
    )
}
