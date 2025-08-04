import { useState } from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username is Required';
    }
    if (!values.remarks) {
        errors.remarks = 'Remarks are Required';
    }
    if (!values.rating) {
        errors.rating = 'Rating is Required';
    }
    return errors;
};

export default function CommentsForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: '',
    //     remarks: '',
    //     rating: 5
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5
        },
        validate,
        onSubmit: values => {
        console.log("Form submitted with data:", values);
        addNewComment(values);
        formik.resetForm(); // Reset the form after submission
    },
    });

    

    // let handleInputChange = (event) => {
    //     setFormData((currData) =>{
    //         return {
    //             ...currData,
    //             [event.target.name]: event.target.value
    //         }
    //     });
    // };

    // let handleSubmit = (event) => {
        
    //     console.log("Form submitted with data:", formData);
    //     addNewComment(formData);
    //     setFormData({
    //         username: '',
    //         remarks: '',
    //         rating: 5
    //     });
    // };

    return (
    <div>
        <h4>Give a comment</h4>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input 
                placeholder="username" 
                type="text"
                value={formik.values.username} 
                onChange={formik.handleChange} 
                id='username'
                name="username" 
            />

            {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}

    
            <br></br>  <br></br>

            <label htmlFor='remarks'>Remarks</label>
            <textarea 
                value={formik.values.remarks} 
                placeholder="Add few remarks" 
                onChange={formik.handleChange} 
                id='remarks'
                name="remarks"
            ></textarea>
            <br></br>  <br></br>

            {formik.errors.remarks ? <div className='error'>{formik.errors.remarks}</div> : null}

            <label htmlFor='rating'>Rating</label>            
            <input 
                placeholder="rating" 
                type="number" 
                min="1" 
                max="5" 
                value={formik.values.rating} 
                onChange={formik.handleChange} 
                id='rating'
                name="rating" 
            />
            <br></br> <br></br>

            <button type='submit'>Add Comment</button>
        </form>
    </div>
    )
}