import React, {useState} from "react";

function RequestForm({updateRequests}){
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        creator: "",
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        updateRequests(formData)
        setFormData({
            name: "",
            location: ""
        })
    }

    return(
        <section className="request-form-container">
            <h3>Make a Request</h3>
            <form id="request-form" onSubmit={handleFormSubmit}>
                <label>Restaurant:
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        />
                </label>
                <label>Location:
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="City, ST"
                        name="location"
                        value={formData.location}
                        />
                </label>
                <button type="submit">Submit Request</button>
            </form>
        </section>
    )

}

export default RequestForm;