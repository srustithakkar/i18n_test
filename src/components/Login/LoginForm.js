import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import LoginAction from "../../_actions/login.actions";
import getTranslationAction from "../../_actions/translation.action"
import { Parallax, Background } from "react-parallax";
import Button from "@material-ui/core/Button";
import {TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import { withTranslation } from 'react-i18next';


let LoginForm = (props) => {
    console.log( "Hey I am form Component::::", props)
    const logIn = props.logIn;
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        logIn(data);
    };

    const [t, i18n] = useTranslation('common');

    const { image, title, title2, parallaxStrength, buttonText, height, darkMode } = props;
    return (
            <Parallax
                style={{ height }}
                blur={{ min: -20, max: 20 }}
                bgImageAlt={title}
                strength={parallaxStrength}
            >
                <Box
                    style={{ color: darkMode ? "gray" : "white" }}
                    textAlign="center"
                    paddingTop={`calc(${height}px/3)`}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label={title}
                            // variant="Input"
                            {...register("username")}
                            // placeholder={title}
                            required
                        >
                        </TextField>
                        <br />
                        <br />
                        <TextField
                            // variant="Input"
                            {...register("password")}
                            label={title2}
                            required
                        ></TextField>
                        <br />
                        <br />
                        <Button
                            style={{ color: darkMode ? "gray" : "black" }}
                            variant="outlined"
                            type="submit"
                        >
                            {buttonText}
                        </Button>
                    </form>
                </Box>
                <h1>{t('welcome.title', {framework:'React'})}</h1>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <button onClick={() => i18n.changeLanguage('gu')}>gu</button>
                <Background className="custom-bg">
                    <img src={image} alt="img" />
                </Background>
            </Parallax>
    );
};

const mapStateToProps = (state) => {
    return {
        isError: state.logInReducer.isError,
        data: state.translationReducer.data
    };
};
const mapDispatchToProps = (dispatch) => {
return {
    logIn: (user) => dispatch(LoginAction.LogIn(user)),
    changeLanguage: (data) => dispatch(getTranslationAction.changeLanguage(data))
};
};

export default withTranslation('common')(connect(mapStateToProps, mapDispatchToProps)(LoginForm));