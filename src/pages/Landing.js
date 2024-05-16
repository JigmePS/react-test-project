import { Link } from "react-router-dom";
import logoImg from "../images/Mlogo.png";

const Landing = () => {

    return (
        <>
            <body id="labody">

                <div id="RootWrapperHome">

                    <div id="Header">

                        <Link to="">
                            <img src={logoImg}
                                alt="image of Logo" id="Logo" />
                        </Link>

                        <Link to="/login">
                            <div id="Div">
                                <span id="LogIn">
                                    Log in
                                </span>
                            </div>
                        </Link>

                    </div>

                    <span id="ManageAllYourProjectTasksAndFilesInOnePlace">
                        Manage all your project tasks, and files, in one place
                    </span>
                    <span id="WorkOnYourProjectFromAnywhere">
                        Work on your project from anywhere.
                    </span>
{/* 
                    <form action="" method="post" id="WForm">

                        <div id="EmailInput">
                            <input type="text" name="email" placeholder="Email" id="Email" />
                        </div>

                        <input type="submit" value="Sign up - its free!" id="SignUpButton" />

                    </form> */}

                    <span id="MCopyright2024Operis">
                        Copyright © 2024 Operis
                    </span>



                </div>

            </body>
        </>
    );
};
export default Landing;