import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { WagmiProvider } from 'wagmi'
import { FC, ReactNode } from "react";

export { PYUSD_CONTRACT_ADDRESS } from './constants'
export { useTokenDecimals } from './useTokenDecimals'
export { StableContractProvider, useStableContract } from './stable-contract'

const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
})

type WallerProviderProps = {
    children?: ReactNode
}

export const WallerProvider: FC<WallerProviderProps> = (props) => {
    const { children } = props;
    return <WagmiProvider config={config}>{children}</WagmiProvider>
}