import { CiMenuFries } from "react-icons/ci";


export default function Header() {
    return (
        <header>
                <div className="py-3">
                    <div className="w-[90%] m-auto flex justify-between items-center">
                        <div className="relative w-full">
                            <h1 className="text-lg italic font-semi-bold">Adriana Nimo</h1>
                        </div>
                        <div>
                            <CiMenuFries className="text-2xl"/>
                        </div>
                    </div>
                </div>
        </header>
    )
}