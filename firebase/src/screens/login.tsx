import { useState } from "react";
import BAButton from "../component/BAButton";
import BAInput from "../component/BAInput";
import { fbLogin } from "../config/firebasemethods";
import { Link } from "react-router-dom";


export default function Login() {

    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    let LoginUser = () => {
        console.log(model);
        fbLogin(model)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return <>

        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
            <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
                <div className="py-5">
                    <h1 className="text-3xl font-medium">Login</h1>
                </div>

                <div className="py-5">
                    <BAInput
                        value={model.email}
                        onChange={(e: any) => fillModel("email", e.target.value)}
                        label="Email"
                    />
                </div>
                <div className="py-5">
                    <BAInput
                        value={model.password}
                        onChange={(e: any) => fillModel("password", e.target.value)}
                        label="Password"
                    />
                </div>
                <div className="py-5  ">
                    <BAButton onClick={LoginUser} label="Login " />
                    <div style={{float : 'right' }}>
                <p className=" ">Don't have an account <Link className="p-3  text-light" to="/sign up">Sign up</Link> </p>
                   
                </div>
                </div>
            </div>
        </div>

    </>
}