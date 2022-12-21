import React, {useState} from "react";

function RequestForm({updateRequests, upvoteClick}){
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

        // console.log(formData)
        fetch(`http://localhost:9292/restaurant-requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(newRequest => {
                upvoteClick(newRequest.id)
                
            })
    }

    return(
        <section className="request-form-container">
            <h3>Make a Request</h3>
            <form id="request-form" onSubmit={handleFormSubmit}>
                <label>Restaurant
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="Papa John's"
                        name="name"
                        />
                </label>
                <label>Location
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="City, ST"
                        name="location"
                        />
                </label>
                <button type="submit">Submit Request</button>
            </form>
        </section>
    )

}

export default RequestForm;