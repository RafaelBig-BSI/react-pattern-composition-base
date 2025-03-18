interface NotificationContentProps {
    text: string;
}

export const NotificationContent = ({ text }: NotificationContentProps) => {
    return(
        <div className="flex flex-col gap-2">
            <p className="text-md font-bold leading-relaxed text-zinc-100">
                {text}
            </p>
            <div className="text-zinc-400 flex items-center gap-1">
                <span className="text-xs">Convite</span>
                <span className="text-xs">Há 3 min</span>
            </div>
        </div>
    )
}