import { TextField, FormControlLabel, Button, Checkbox } from "@material-ui/core";
import React, { useState } from "react";


const AddFood = () => {
    const [Food, setFood] = useState({
        "heading": "", "image": "", "amount": "", "variants": ""
    })
    console.log(Food);

    const [Variant, setVariant] = useState({ "Small": false, "Medium": false, "Large": false })

    const handleSubmit = (event) => {
        event.preventDefault();
        let variants = ""
        if (Variant.Small) {
            variants += "Small "
        }
        if (Variant.Medium) {
            variants += "Medium "
        }
        if (Variant.Large) {
            variants += "Large "
        }
        //Variant.Small ? null : null
        setFood({ ...Food, "variants": variants })
        console.warn(Food);


    }
    return (
        <div style={{ "backgroundColor": "white", "color": "black" }}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField name="heading" label="FoodName" variant="outlined" value={Food.heading} onChange={(event) => setFood({ ...Food, "heading": event.target.value })} required fullWidth />
                <TextField name="amount" label="Amount" variant="outlined" value={Food.amount} onChange={(event) => setFood({ ...Food, "amount": event.target.value })} required fullWidth />
                <FormControlLabel control={<Checkbox checked={Variant.Small} name="Small" onChange={(event) => setVariant({ ...Variant, [event.target.name]: event.target.checked })} />} label="Small" />
                <FormControlLabel control={<Checkbox checked={Variant.Medium} name="Medium" onChange={(event) => setVariant({ ...Variant, [event.target.name]: event.target.checked })} />} label="Medium" />
                <FormControlLabel control={<Checkbox checked={Variant.Large} name="Large" onChange={(event) => setVariant({ ...Variant, [event.target.name]: event.target.checked })} />} label="Large" />

                <Button autoFocus color="primary" type="submit" variant="contained">
                    Save changes
                </Button>
            </form>

        </div>
    )
}

export default AddFood;