// // import { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import emailjs from 'emailjs-com';

// // const Message = () => {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm();
// //   const [disabled, setDisabled] = useState(false);
// //   const [alertInfo, setAlertInfo] = useState({
// //     display: false,
// //     message: '',
// //     type: '',
// //   });

// //   // Shows alert message for form submission feedback
// //   const toggleAlert = (message, type) => {
// //     setAlertInfo({ display: true, message, type });

// //     // Hide alert after 5 seconds
// //     setTimeout(() => {
// //       setAlertInfo({ display: false, message: '', type: '' });
// //     }, 5000);
// //   };

// //   // Function called on submit that uses emailjs to send email of valid contact form
// //   const onSubmit = async (data) => {
// //     // Destrcture data object
// //     const { name, email, subject, message } = data;
// //     try {
// //       // Disable form while processing submission
// //       setDisabled(true);

// //       // Define template params
// //       const templateParams = {
// //         name,
// //         email,
// //         subject,
// //         message,
// //       };

// //       // Use emailjs to email contact form data
// //       await emailjs.send(
// //         import.meta.env.VITE_SERVICE_ID,
// //         import.meta.env.VITE_TEMPLATE_ID,
// //         templateParams,
// //         import.meta.env.VITE_PUBLIC_KEY,
// //       );

// //       // Display success alert
// //       toggleAlert('Form submission was successful!', 'success');
// //     } catch (e) {
// //       console.error(e);
// //       // Display error alert
// //       toggleAlert('Uh oh. Something went wrong.', 'danger');
// //     } finally {
// //       // Re-enable form submission
// //       setDisabled(false);
// //       // Reset contact form fields after submission
// //       reset();
// //     }
// //   };

// //   return (
// //     <div className='ContactForm'>
// //       <div className='container'>
// //         <div className='row'>
// //           <div className='col-12 text-center'>
// //             <div className='contactForm'>
// //               <form
// //                 id='contact-form'
// //                 onSubmit={handleSubmit(onSubmit)}
// //                 noValidate
// //               >
// //                 {/* Row 1 of form */}
// //                 <div className='row formRow'>
// //                   <div className='col-6'>
// //                     <input
// //                       type='text'
// //                       name='name'
// //                       {...register('name', {
// //                         required: {
// //                           value: true,
// //                           message: 'Please enter your name',
// //                         },
// //                         maxLength: {
// //                           value: 30,
// //                           message: 'Please use 30 characters or less',
// //                         },
// //                       })}
// //                       className='form-control formInput'
// //                       placeholder='Name'
// //                     ></input>
// //                     {errors.name && (
// //                       <span className='errorMessage'>
// //                         {errors.name.message}
// //                       </span>
// //                     )}
// //                   </div>
// //                   <div className='col-6'>
// //                     <input
// //                       type='email'
// //                       name='email'
// //                       {...register('email', {
// //                         required: true,
// //                         pattern:
// //                           /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
// //                       })}
// //                       className='form-control formInput'
// //                       placeholder='Email address'
// //                     ></input>
// //                     {errors.email && (
// //                       <span className='errorMessage'>
// //                         Please enter a valid email address
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>
// //                 {/* Row 2 of form */}
// //                 <div className='row formRow'>
// //                   <div className='col'>
// //                     <input
// //                       type='text'
// //                       name='subject'
// //                       {...register('subject', {
// //                         required: {
// //                           value: true,
// //                           message: 'Please enter a subject',
// //                         },
// //                         maxLength: {
// //                           value: 75,
// //                           message: 'Subject cannot exceed 75 characters',
// //                         },
// //                       })}
// //                       className='form-control formInput'
// //                       placeholder='Subject'
// //                     ></input>
// //                     {errors.subject && (
// //                       <span className='errorMessage'>
// //                         {errors.subject.message}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>
// //                 {/* Row 3 of form */}
// //                 <div className='row formRow'>
// //                   <div className='col'>
// //                     <textarea
// //                       rows={3}
// //                       name='message'
// //                       {...register('message', {
// //                         required: true,
// //                       })}
// //                       className='form-control formInput'
// //                       placeholder='Message'
// //                     ></textarea>
// //                     {errors.message && (
// //                       <span className='errorMessage'>
// //                         Please enter a message
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 <button
// //                   className='submit-btn btn btn-primary'
// //                   disabled={disabled}
// //                   type='submit'
// //                 >
// //                   Submit
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {alertInfo.display && (
// //         <div
// //           className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
// //           role='alert'
// //         >
// //           {alertInfo.message}
// //           <button
// //             type='button'
// //             className='btn-close'
// //             data-bs-dismiss='alert'
// //             aria-label='Close'
// //             onClick={() =>
// //               setAlertInfo({ display: false, message: '', type: '' })
// //             } // Clear the alert when close button is clicked
// //           ></button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Message;


// Message.js

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import classes from './message.module.css'; // Import CSS module

const Message = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className={classes.container}> {/* Use container class */}
      <div className='row'>
        <div className='col-12 text-center'>
          <div className={classes.contactForm}> {/* Use contactForm class */}
            <form
              id='contact-form'
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className={`row ${classes.formRow}`}>
                <div className='col-6'>
                  <input
                    type='text'
                    name='name'
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Please enter your name',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    className={`${classes.formControl} ${classes.formInput}`} 
                    placeholder='Name'
                  ></input>
                  {errors.name && (
                    <span className={classes.errorMessage}> {/* Use errorMessage class */}
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <br></br>
                <div className='col-6'>
                  <input
                    type='email'
                    name='email'
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className={`${classes.formControl} ${classes.formInput}`} 
                    placeholder='Email address'
                  ></input>
                  {errors.email && (
                    <span className={classes.errorMessage}> {/* Use errorMessage class */}
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>
              {/* Row 2 of form */}
              <div className={`row ${classes.formRow}`}> {/* Use formRow class */}
                <div className='col'>
                  <input
                    type='text'
                    name='subject'
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'Please enter a subject',
                      },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters',
                      },
                    })}
                    className={`${classes.formControl} ${classes.formInput}`} 
                    placeholder='Subject'
                  ></input>
                  {errors.subject && (
                    <span className={classes.errorMessage}> {/* Use errorMessage class */}
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>
              {/* Row 3 of form */}
              <div className={`row ${classes.formRow}`}> {/* Use formRow class */}
                <div className='col'>
                  <textarea
                    rows={3}
                    name='message'
                    {...register('message', {
                      required: true,
                    })}
                    className={`${classes.formControl} ${classes.formInput}`} 
                    placeholder='Message'
                  ></textarea>
                  {errors.message && (
                    <span className={classes.errorMessage}>
                      Please enter a message
                    </span>
                  )}
                </div>
              </div><center>

              <button
                className={`submit-btn btn btn-primary ${classes.submitBtn}`} 
                disabled={disabled}
                type='submit'
              >
                Submit
              </button></center>
            </form>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
  );
};

export default Message;

