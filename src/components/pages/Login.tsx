import React, { useEffect, useState } from "react";
import { ButtonForInput } from "../atoms/ButtonForInput";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { validateName, validateEmail } from "../../helper/ForLogin";
import { login } from "../router/utils";
import { useHistory } from "react-router";
import { Navigation } from "../molecules/Navigation";
import { Header } from "../molecules/Header";



interface ILogin {
    searchValue: string;
    onChangeHandler: (text: string) => void;
    isValid: boolean;
    title: string
    children: string;
    onClick: () => void;
}

export const Login = ({ searchValue, onChangeHandler, isValid, title, children, onClick }: ILogin) => {
    const [userName, setUserName] = useState(" ");
    const [email, setEmail] = useState("");

    const isValidUserName = validateName(userName)
    const isValidEmail = validateEmail(email)
    const history = useHistory();

    const loginUser = () => {
        if (isValidUserName && isValidEmail) {
            console.log("login");
            login(userName);
            history.push("/films")
        }
    }
    const [isShowFilter, setIsShowFilter] = useState(false);
    const clickFilter = () => {
        setIsShowFilter(!isShowFilter);
    };
    return (
        <div className="app">
            <nav className="app-nav">
                <Navigation />
            </nav>
            <main className="login-wrapper">
                <Header
                    searchValue={searchValue}
                    onChangeHandler={onChangeHandler}
                    onClick={onClick}
                    clickFilter={clickFilter} />
                <Title title={"Login"} />
                <div className="form-wrapper">
                    <form className="form">
                        <Input
                            searchValue={userName}
                            onChangeHandler={(text: string) => setUserName(text)}
                            title={"User name"}
                            isValid={isValidUserName}
                        />
                        <Input
                            searchValue={email}
                            onChangeHandler={(text: string) => setEmail(text)}
                            title={"Email"}
                            isValid={isValidEmail}
                        />
                        <ButtonForInput isValid={true} onClick={loginUser}>
                            Login
                        </ButtonForInput>
                    </form>
                </div>
            </main>
        </div>
    );
};