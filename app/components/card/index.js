import classNames from "classnames";
function Card({children, styles}){
    return (
        <div className={classNames(`bg-[#F2F2F2] border-2 border-white rounded-3xl w-[268px] h-64 ${styles}`)}>
            {children}
        </div>

    );
}

export default Card;