import { ButtonHTMLAttributes, ElementType } from "react"
import { twMerge } from "tailwind-merge"

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType;
}

export const NotificationAction = ({ icon: Icon, ...rest }: NotificationActionProps) => {
    return(
        <button
            {...rest}
            className={twMerge("w-8 h-8 flex items-center justify-center bg-zinc-400 hover:bg-zinc-500", rest.className)}
        >
            <Icon className="w-3 h-3 text-zinc-50" />
        </button>
    )
}