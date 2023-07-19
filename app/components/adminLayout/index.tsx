import classNames from "classnames";
function Layout({children}: {children: React.ReactNode}){
    return(
        <div className={classNames("flex ")}>
            {children}
        </div>
    );
}

export default Layout;