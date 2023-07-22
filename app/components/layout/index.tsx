import classNames from "classnames";
import Header from "../header";
import i18n from "../../../public/translation/i18n.json";
function Layout({children, cls, header=false}: {children: React.ReactNode, cls:string, header?:boolean}){
    return(
        <>
        <div className={`${cls}`}>
        { header && <Header text={i18n.logip}/>}
        {children}
        </div>
        </>
    );
}

export default Layout;