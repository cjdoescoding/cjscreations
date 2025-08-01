import {ReactNode} from "react";

export default function ButtonContainer({children}: {children: ReactNode}){
    return (
        <div className="mx-[5%] sm:mx-[15%] flex flex-col gap-6">
            {children}
        </div>
    )
}