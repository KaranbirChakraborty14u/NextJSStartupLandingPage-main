import React, { useState } from "react";

interface EnrollmentFormProps {
onSubmit: (formData: EnrollmentFormData) => void;
}

interface EnrollmentFormData {
firstName: string;
lastName: string;
email: string;
course: string;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ onSubmit }) => {
const [formData, setFormData] = useState<EnrollmentFormData>({
firstName: "",
lastName: "",
email: "",
course: "",
});

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
onSubmit(formData);
};

const handleInputChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
setFormData((prevState) => ({
...prevState,
[e.target.name]: e.target.value,
}));
};

return (
<form onSubmit={handleSubmit} className="enrollment-form" style={{margin: '20px', padding: '20px', border: '1px solid #ccc'}}>
<div className="form-field">
<label htmlFor="firstName">First Name:</label>
<input
type="text"
id="firstName"
name="firstName"
value={formData.firstName}
onChange={handleInputChange}
style={{margin: '5px'}}
required
/>
</div>
<div className="form-field">
<label htmlFor="lastName">Last Name:</label>
<input
type="text"
id="lastName"
name="lastName"
value={formData.lastName}
onChange={handleInputChange}
style={{margin: '5px'}}
required
/>
</div>
<div className="form-field">
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleInputChange}
style={{margin: '5px'}}
required
/>
</div>
<div className="form-field">
<label htmlFor="course">Course:</label>
<select
id="course"
name="course"
value={formData.course}
onChange={handleInputChange}
style={{margin: '5px'}}
required
>
<option value="">--Please choose an option--</option>
<option value="math">Ethical Hacking</option>
</select>
</div>
<div className="form-submit">
<button type="submit" style={{margin: '5px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px'}}>Submit</button>
</div>
</form>
);
};

const EnrollmentPage: React.FC = () => {
const handleEnrollmentSubmit = (formData: EnrollmentFormData) => {
// Do something with the form data, such as submitting it to a server or storing it in local state
console.log(formData);
};

return (
<div className="enrollment-page" style={{textAlign: 'center'}}>
<h1 className="enrollment-page-heading" style={{fontSize: '40px', color: '#4CAF50'}}>Enrollment Form</h1>
<EnrollmentForm onSubmit={handleEnrollmentSubmit} />
</div>
);
};

export default EnrollmentPage;