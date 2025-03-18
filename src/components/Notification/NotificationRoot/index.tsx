import { ReactNode } from "react";

interface NotificationRootProps {
    children: ReactNode;
}

export const NotificationRoot = ({ children }: NotificationRootProps) => {
    return(
        <div className="bg-zinc-700 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6 max-w-2xl rounded-md m-auto mt-7">
            {children}
        </div>
    )
}