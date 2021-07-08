const hi = (translations) => {
    return {
        "welcome": {
            "title": translations ? translations["hi"]: "hello"
        }
    }
}

export default hi;