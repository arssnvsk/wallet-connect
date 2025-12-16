import { useConnection, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export const useWalletState = () => {
    const { address , status } = useConnection()
    const { disconnect, status: disconnectStatus } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })


    return {
        disconnect,
        disconnectStatus,
        ensAvatar,
        ensName,
        address,
        status
    }
}