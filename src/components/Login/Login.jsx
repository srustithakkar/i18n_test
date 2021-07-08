import React, { useEffect } from "react";
import { connect } from "react-redux";
import getTranslationAction from "../../_actions/translation.action"
import { I18nextProvider } from 'react-i18next';
import LoginForm from "./LoginForm"
import i18next from "i18next";
import common_en from "../../translations/en/common"
import common_gu from "../../translations/gu/common"
import common_hi from "../../translations/hi/common"

const loadTranslation = (translations) =>{
    i18next.init({
        interpolation: { escapeValue : false},
        lang: 'en',
        resources: {
            en: {
                common: common_en(translations)
            },
            gu:{
                common: common_gu(translations)
            },
            hi:{
                common: common_hi(translations)
            }
        }
    })
    return i18next
}

let Login = (props) => {
    useEffect(() =>{
        props.getTranslation()
    },[])

    const { image, title, title2, parallaxStrength, buttonText, height, darkMode} = props;
    
    if (props.loading) return <div>Loading...</div>
    return (
        <I18nextProvider i18n={loadTranslation(props.translations)}>
            <LoginForm 
                image={image}
                title={title}
                title2={title2}
                parallaxStrength = {parallaxStrength}
                buttonText = {buttonText}
                height = {height}
                darkMode = {darkMode}
            />
        </I18nextProvider>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.translationReducer.loading,
        translations: state.translationReducer.translations
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTranslation: () => dispatch(getTranslationAction.getTranslation()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);