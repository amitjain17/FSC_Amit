import { TextField, FormControlLabel, Button, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createFood } from "../actions/actions.js";

const AddFood = () => {
    const [Food, setFood] = useState({
        "heading": "", "image": "", "amount": "", "variants": ""
    })
    console.log(Food);

    const [Variant, setVariant] = useState({ "Small": false, "Medium": false, "Large": false })

    const dispatch = useDispatch();
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
        dispatch(createFood(Food));
        clear();
    }
    const clear = () => {
        setFood({
            "heading": "", "image": "", "amount": "", "variants": ""
        })
        setVariant({
            "Small": false, "Medium": false, "Large": false
        })
    }

    return (
        <div style={{ "backgroundColor": "white", "color": "black" }}>
            <form autoComplete="off" onSubmit={handleSubmit} style={{ "margin": "2rem" }}>
                <h4 style={{ "textAlign": "center" }}>ADD FOOD</h4>
                <div style={{ "margin": "2px" }}>
                    <TextField name="heading" label="FoodName" variant="outlined" value={Food.heading} onChange={(event) => setFood({ ...Food, "heading": event.target.value })} required fullWidth />
                </div>
                <div style={{ "margin": "2px" }}>
                    <TextField name="amount" label="Amount" variant="outlined" value={Food.amount} onChange={(event) => setFood({ ...Food, "amount": event.target.value })} required fullWidth />
                </div>
                <FormControlLabel control={<Checkbox checked={Variant.Small} name="Small" onChange={(event) => setVariant({ ...Variant, [event.target.name]: event.target.checked })} />} label="Small" />
                <FormControlLabel control={<Checkbox checked={Variant.Medium} name="Medium" onChange={(event) => setVariant({ ...Variant, [event.target.name]: event.target.checked })} />} label="Medium" />
                <FormControlLabel control={<Checkbox checked={Variant.Large} name="Large" onChange={(event) => setVariant({ ...Variant, [event.target.name]: event.target.checked })} />} label="Large" />
                <div style={{ "margin": "3px" }}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setFood({ ...Food, image: base64 })} />
                </div>
                <Button autoFocus color="primary" type="submit" variant="contained">
                    Save changes
                </Button>
            </form>

        </div>
    )
}

export default AddFood;