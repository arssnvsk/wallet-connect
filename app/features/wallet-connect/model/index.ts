import { useConnect, useConnection, useConnectors } from "wagmi";

export const useWalletConnect = () => {
    const { connect } = useConnect()
    const connectors = useConnectors()
    const { status } = useConnection()


    return {
        connectors,
        connect,
        status
    }
}