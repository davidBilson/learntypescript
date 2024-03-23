// why getting SSL protocol error in axios request on the front
// does the request need headers?????

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = formData.email;
    const password = formData.password;
    try {
      const res = await axios.post('https://localhost:3000/users/login', {email, password});
      // const res = await axios.post('https://odd-gold-anemone-cap.cyclic.app/users/login', {email, password});
      if (res.data.success === false) {
        toastError(res.data.message)
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ''
        }))
        
      } else {
        setUser(true)
        toastSuccess(res.data.message)
        window.sessionStorage.setItem('userName', res.data.userName)
        window.sessionStorage.setItem('userId', res.data.id)
        setId(window.sessionStorage.getItem('userId'))
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ''
        }));
        navigate('/dashboard');
      }
      setLoading(false);
    } catch (err) {
      toastError(err.message)
      console.error(err);
      setLoading(false);
    }
  };