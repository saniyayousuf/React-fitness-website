import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../config/firebasemethods";

export default function Protected({ Screen }: any) {

    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()

    let CheckAuth = () => {
        setLoader(true);
        fbAuth().then((res) => {
            setLoader(false)

        }).catch((err) => {
            setLoader(false);
            navigate("/login")
        })
    }

    useEffect(() => {

        CheckAuth()
    }, []);


    return loader ? <>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk
    GBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6
    Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N
    zc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUAhQMBIgACEQEDEQH/xAAcAAEAAg
    MBAQEAAAAAAAAAAAAABAUBBgcDAgj/xAA3EAABAwMCAwUECQUBAAAAAAABAAIDBAURBiE
    SMUEHExRRcRUiYYEWIzJCUpKhscE1YnOR4Qj/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QA
    FBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4aiIgIiICIiAiIgIiICIiAiIg
    IiICIiAiIgIiICIiAilez6vwXjfC1HhOLh7/und3ny4uWV5RRd7KyNuxe4NHzKDyRdO7S
    Oy6n0fp6kudPcZah7pWxTskYAMkE5bjpt1XMsb7IMIskFvMYWEBERAREQEREBERAREQFn
    hKnWGOhlvNFHdZHR0Lpmioe3mGZ3XbtQdktgvVAyq0xOyjeW5jLHmWGX13JHqP9IJ/ZTc
    Lfqzs9fp+riZxUsRpp4h95pzwv8AX+QuI3uyVOnNVyWus+1T1DQ1+NnsyC1w9Qri11F+7
    LtVsmrKPDuAtfEX+5URnyd69VB1/q2TWV7bcHUjaVkcIijjDuI4BJ3ONzkoO1f+gnD6Bwb
    862PH5XL88UUWXcZGw5KRc9QXe7U1PTXK41FTBTDEUcr8hqiMqiyLgDfmgVjw+TA+7svDC
    m0dvkqcOd7sZ+8eqlV9JS09KQMd79053KCnREQEREBERAREQEREGcY5rYNLawvOl6jjtlU
    4RF2ZKeTeN/qOnqFtHZpqzTtgt1TT3eAtqHy8QmEPecbcbD4Y3W4u7SdGcBy17hj7Pg+aD
    luutZ1msqunnrIIoG07CyOOLJAzzJJ58gtXUy6zQ1Nwqp6WHuIJJXOji/C0nYKGgIiIJ7L
    nNHTtiYGjAwHdVDe50ji57iSepUu21MNO9/fNzkbHGVYi5UX935EFCsL3rJI5ah74m8LCd
    gvBAREQEREBERAREQfTGOkeGMBc4nAAGSSt/wBMdmlZWhs97eaSDn3Ld5HevRq0m1Vr7bca
    etia1z4JBIGu5HC2/UHaTdLlF3FBGLfGRh7mO4nn59EEPtFslqsdzgp7RKTxR5miMnH3Zz
    tv8fJakRhbToewe3rlJNXAvpId5SSffceQz+q8tc0Fvor+aa1s4AGN7yIHIa89B+iDWlkBXt
    70xU2eiiqZZY5GvIa5rc5YT0+KsLFZrfcbITgGpJIc/Jyx3T+EESgs1HWW9j2yu75w3cDyPl
    hVVwtdTQnMrcx5wHt5f8XwH1NtqnsDjFLG7hcOhU6svklVRGndC0Ods52f2QUyIiAiIgIiICI
    iAiIgIiIOl2LUdosmj2eHlYa0NJdAftOlPU/D+AufGaSoru/mcXSSS8TnHqSVGyUDiCCOY3yg6
    V2g/wBBj/zt/YrTdNXP2bXfWnFPKOGT4eRXlc79cLnTRU9XKHRxnIwMcR8z5qsygvdXT0dTXslo
    nteSz6xzeRPT9FQrOVhAREQEREBERAREQEREBSvAzezW1/u9w6YwjffiDQ7l6FRVcUVypW2Q26s
    pZ5OGodURSRThmHFobggtORtlArNOVlJTyyPlpXywNa6enjlzLCCQMuHqQDjOMjK9naUuEVa+lqZ
    aWAx0wqXSSSe4GZDcZA5gnBHmpseqaZldNX+zS6rquEVRdP8AVuAc1xDW424i0ZyTjfCz9LvFU8k
    N2omzmVksZkpi2AhsjmvI2aQfebnJ/EUEWDRt2qKhsMPhnl7gI3iYcMmWOeC08sENPz2Uan03XSw
    tnldBTQFjnukqH8Ijw8sw7bOeIEYVn9L3CHuIqIMgawRwtEpJY0RPjGT1OXl2V9zawNbTxwXCiD4
    +6ayd8MnC+SRry5so2IDtznYg5QazX0b6GodC+WGXABD4Xh7XAjIIKjK7vV2prtVmompHscGNY3h
    lGSA0gFx4d3ZwSdvL4qoqDEZXGBjmRnk1zuIj5oPNERAREQER
    EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" alt="loading*********"
            width={100} />
    </> :
        <Screen />
}