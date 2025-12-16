import { useBalance, useConnection, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { useTokenBalance } from "./useTokenBalance";
import { PYUSD_CONTRACT_ADDRESS } from "@/shared/wallet";

export const useWalletConnection = () => {
    const { address, isConnected , status } = useConnection()
    const { data: balance, status: balanceStatus } = useBalance({
        address,
        query: {
            enabled: isConnected,
        },
    })

    const { disconnect, status: disconnectStatus } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    const pyusdBalance = useTokenBalance(address, PYUSD_CONTRACT_ADDRESS)

    return {
        balance,
        pyusdBalance,
        disconnect,
        disconnectStatus,
        ensAvatar,
        ensName,
        address,
        balanceStatus,
        status
    }
}