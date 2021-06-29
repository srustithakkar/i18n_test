import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import LoginAction from "../../_actions/login.actions";
import getTranslationAction from "../../_actions/translation.action"
import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {reactI18nextModule} from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import { I18nextProvider } from 'react-i18next';
import LoginForm from "./LoginForm"

function translation (data) {
    console.log(data.en)
    i18n
    .use(XHR)
    .use(LanguageDetector)  
    .use(reactI18nextModule)
    .init({
        resources: {
            en: data.en,
            // gu: data.gu,
            // hi: data.hi,
        },
        /* default language when load the website in browser */
        lng: "en",
        /* When react i18next not finding any language to as default in borwser */
        fallbackLng: "en",
        /* debugger For Development environment */
        debug: true,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: ".",
        interpolation: {
            escapeValue: false, 
            formatSeparator: ","
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })
    return i18n
}


let Login = (props) => {
    useEffect(() =>{
        props.getTranslation()
    },[])

    const { image, title, title2, parallaxStrength, buttonText, height, darkMode} = props;
    
    if (!props.data) return <div>Suraj Shukla</div>
    return (
        <I18nextProvider i18n={translation(props.data)}>
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
        data: state.translationReducer.data
    };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTranslation: () => dispatch(getTranslationAction.getTranslation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);