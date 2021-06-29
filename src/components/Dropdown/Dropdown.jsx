import React, {useEffect} from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { connect } from "react-redux";
import getTranslationAction from "../../_actions/translation.action";

function Dropdown(props) {
    console.log("props:::::", props.data)
    const {data} = props;
    useEffect(()=> {
        props.getTranslation();
    }, []);

    const handleChange = (ev) => {
        props.changeLanguage(ev.target.value);
    }
    
    if (props.Loading || !data) return <div>Loainng....</div>;

    return (
        <div style={{width:"30vw"}}>
            <FormControl style={{width:"100%"}}>
                <InputLabel>Select Language </InputLabel>
                    <Select value={props.selectedLanguage} onChange={handleChange}>
                        <MenuItem value={data.en}>English</MenuItem>
                        <MenuItem value={data.gu}>Gujarati</MenuItem>
                        <MenuItem value={data.hi}>Hindi</MenuItem>
                    </Select>
            </FormControl>
        </div>  
    )
}

function mapStateToProps(state) {
    return {
      data: state.translationReducer.data,
      Loading: state.translationReducer.Loading,
      selectedLanguage: state.translationReducer.selectedLanguage
    };
  };

function mapDispatchToProps(dispatch){
    return {
        getTranslation: (data) => dispatch(getTranslationAction.getTranslation(data)),
        changeLanguage: (lang) => dispatch(getTranslationAction.changeLanguage(lang))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);