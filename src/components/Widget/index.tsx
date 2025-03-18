import { ArrowRight, Check, Gem, Rocket, X } from "lucide-react"
import { Notification } from "../Notification"

export const Widget = () => {
    return(
        <div>
            <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte de nossa empresa!" />
            <Notification.Actions>
                <Notification.Action onClick={() => {}} icon={X} className="bg-violet-500 hover:bg-violet-600" />
                <Notification.Action onClick={() => {}} icon={Check} className="bg-emerald-500 hover:bg-emerald-600"  />
            </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
            <Notification.Content text="Você recebeu uma mensagem. Suas mensagens estão em seu Inbox!" />
            <Notification.Actions>
                <Notification.Action icon={ArrowRight} className="bg-blue-500 hover:bg-blue-600" />
            </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
            <Notification.Icon icon={Gem} />
            <Notification.Content text="Atualizamos a nossa interface! Dê uma olhada :)" />
            </Notification.Root>
        </div>
    )
}