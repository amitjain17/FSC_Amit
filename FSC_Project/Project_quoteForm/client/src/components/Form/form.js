import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { useDispatch } from 'react-redux';
import { Dialog, Typography, Paper, Button, DialogActions, DialogTitle, DialogContent, TextField, TextareaAutosize } from '@material-ui/core';


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", estimatedBudget: "", phoneNumber: "", projectDetails: "", projectType: "", timeFrame: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.warn(formData);
    }
    const disptach = useDispatch();
    useEffect(() => { if (formData) setFormData(formData) }, [formData])

    return (
        <div>
            <DialogContent dividers>
                <Paper >
                    <form autoComplete="off" onSubmit={handleSubmit}
                        style={{ "padding": "3%" }}>
                        <div>
                            <Typography variant="h5" style={{ "textAlign": "center" }}>Creating a Quote</Typography>
                        </div>
                        <TextField name="firstName" variant="standard" label="FirstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} style={{
                            "marginRight": "10%"
                        }} required />

                        < TextField name="lastName" variant="standard" label="LastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="email" variant="standard" label="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />


                        <TextField name="phoneNumber" variant="standard" label="PhoneNumber" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="projectType" variant="standard" label="ProjectType" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="estimatedBudget" variant="standard" label="EstimatedBudget" value={formData.estimatedBudget} onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })} style={{
                            "marginRight": "10%"
                        }} required />

                        <TextField name="timeFrame" variant="standard" label="TimeFrame" value={formData.timeFrame} onChange={(e) => setFormData({ ...formData, timeFrame: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <br />
                        <TextareaAutosize
                            aria-label="maximum height" minRows={4} maxRows={4}
                            name="projectDetails" variant="outlined" placeholder="ProjectDetails" value={formData.projectDetails} onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })} style={{
                                "marginRight": "10%",
                                "marginTop": "1.5%",
                                "minWidth": "12rem"
                            }} />
                        <br />

                        <Button autoFocus color="primary" type="submit" variant="contained">
                            Save changes
                        </Button>
                    </form>
                </Paper>

            </DialogContent>

        </div>
    )
}
export default Form