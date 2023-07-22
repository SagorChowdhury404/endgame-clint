

const Navbar = () => {
    const backgroundURL = "https://img.freepik.com/free-photo/collage-city-committed-education_23-2149886998.jpg?w=740&t=st=1690055713~exp=1690056313~hmac=97891fea76895061bba39c52de443303764872dd84959f3904d3ab5ace276ed4";

    const navbarStyle = {
        backgroundImage: `url('${backgroundURL}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
    };
    return (
        <div >
            <div style={navbarStyle} className="max-h-full h-96 text-4xl ">
                <div className="navbar text-white   ">
                    <div className="navbar-start mt-0">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>


                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-2xl text-slate-950  ">
                            <li ><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="flex-none  gap-2  ms-auto pr-5 ">

                        <div className="dropdown dropdown-end  ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box text-white  ">
                                <li>
                                    <a className="">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="form-control text-gray-100 w-96 mx-auto">
                <input type="text" placeholder="Search" className="input input-bordered md:w-auto" />
            </div>

        </div>
    );
};

export default Navbar;