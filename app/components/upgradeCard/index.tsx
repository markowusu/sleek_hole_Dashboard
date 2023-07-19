
import i18n from "../../../public/translation/i18n.json";
import classNames from "classnames";

function UpgradeCard({ startGradient, styles}:any){
    return (
        <div className={classNames(`flex flex-col bg-gradient-to-b from-[#f6f6f6f6] to-white h-53 rounded-lg shadow-md border-1 border-gray-500 text-center`,  styles)}>
            <div className="text-[#000515] font-sans font-regular mt-6">{i18n.updateToPro}</div>
            <div className="text-[#9D9CA1] mt-4 font-thin mx-8">{i18n.upgradeToMonth}</div>
            <div className="rounded-full bg-[#B0D5F8] px-4  py-2 my-6 mx-12">
            <a className="font-sans w-8 font-semibold  text-[#061A36]" >{i18n.upgradeButton}</a>
            </div>
        </div>
    );
}
export default UpgradeCard;